export type RibbonGeometry = {
  cardWidth: number;
  cardHeight: number;
  gap: number;
  count: number;
};

export type RibbonFrame = {
  offset: number;
  /** Intro, after anfalova.art: a small strip of thumbnails appears
      (fade), zooms out to the full ribbon (zoom), then the lens bends and
      blurs the edges (lens). All three are 0–1 and 1 once settled. */
  fade: number;
  zoom: number;
  lens: number;
  velocity: number;
  geometry: RibbonGeometry;
  compact: boolean;
};

export type RibbonRenderer = {
  resize: (width: number, height: number, rowY: number) => void;
  draw: (frame: RibbonFrame) => boolean;
  destroy: () => void;
};

const vertexSource = `
  attribute vec2 position;
  void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

// Independently implemented optical ribbon from the approved local prototype.
// Artwork is a nine-cell atlas; gutters prevent adjacent projects bleeding.
const fragmentSource = `
  precision highp float;
  uniform vec2 resolution;
  uniform float pixelRatio;
  uniform float rowY;
  uniform float cardHeight;
  uniform float cardWidth;
  uniform float cardGap;
  uniform float itemCount;
  uniform float offset;
  uniform float lensStrength;
  uniform float fade;
  uniform float zoom;
  uniform float motionScale;
  uniform int opticalSamples;
  uniform sampler2D projectAtlas;
  const vec3 background = vec3(18.0 / 255.0);

  float roundedBox(vec2 p, vec2 halfSize, float radius) {
    vec2 q = abs(p) - halfSize + radius;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
  }

  vec3 scene(vec2 screen) {
    // Zoom about the ribbon's centre: at the start the whole set of
    // projects sits in a small strip in the middle of the hero.
    vec2 centre = vec2(resolution.x * .5, rowY);
    vec2 p = centre + (screen - centre) / zoom;
    float stride = cardWidth + cardGap;
    float slot = floor((p.x + offset) / stride);
    float item = mod(slot, itemCount);
    vec2 local = vec2(
      mod(p.x + offset, stride) - cardWidth * .5,
      p.y - rowY
    );
    float distance = roundedBox(local, vec2(cardWidth * .5 * motionScale, cardHeight * .5 * motionScale), 2.0);
    float edge = .7 / zoom;
    float inside = 1.0 - smoothstep(-edge, edge, distance);
    // One copy of the set while small, so the strip has clear ends; cards
    // pop in from the centre outwards.
    float centreSlot = floor((centre.x + offset) / stride);
    float rank = abs(slot - centreSlot);
    float fromCentre = abs((p.x + offset) / stride - centreSlot - .5);
    float strip = 1.0 - smoothstep(itemCount * .5 - .05, itemCount * .5, fromCentre);
    float shown = mix(strip, 1.0, smoothstep(.55, .9, zoom));
    float pop = smoothstep(rank * .09, rank * .09 + .35, fade * 1.4);
    vec2 uv = clamp(local / vec2(cardWidth * motionScale, cardHeight * motionScale) + .5, 0.0, 1.0);
    vec2 cell = vec2(mod(item, 3.0), floor(item / 3.0));
    vec2 atlasPoint = cell * vec2(640.0, 424.0) + vec2(4.5) + uv * vec2(631.0, 415.0);
    vec3 color = texture2D(projectAtlas, atlasPoint / vec2(1920.0, 1272.0)).rgb;
    return mix(background, color, inside * shown * pop);
  }

  void main() {
    vec2 p = vec2(gl_FragCoord.x / pixelRatio, resolution.y - gl_FragCoord.y / pixelRatio);
    float angle = .436332;
    float c = cos(angle), s = sin(angle);
    mat2 inverseRotation = mat2(c, -s, s, c);
    vec2 lensCenter = vec2(resolution.x * .5, rowY);
    vec2 lensSize = resolution.x * vec2(.71389, .40335);
    vec2 delta = p - lensCenter;
    vec2 rotated = inverseRotation * delta;
    float radius = length(rotated / lensSize);
    if (radius < .55 || radius >= 1.0 || lensStrength < .001) {
      gl_FragColor = vec4(scene(p), 1.0);
      return;
    }
    float opticalEdge = smoothstep(.578, 1.0, radius);
    float angleOnLens = atan(rotated.y, rotated.x);
    float bend = -.55 * sin(2.0 * angleOnLens) + .25 * cos(angleOnLens);
    vec2 tangent = vec2(-delta.y, delta.x) / max(length(delta), 1.0);
    float reach = min((lensSize.x + lensSize.y) * .5, resolution.y * .7825);
    vec2 source = p + tangent * bend * opticalEdge * reach * .60 * lensStrength;
    vec2 dispersion = delta * .044 * smoothstep(.55, 1.0, radius) * lensStrength;
    vec3 color = vec3(0.0), energy = vec3(0.0);
    for (int sampleIndex = 0; sampleIndex < 16; sampleIndex++) {
      if (sampleIndex >= opticalSamples) break;
      float spectrum = float(sampleIndex) / float(opticalSamples - 1);
      vec3 weights = exp(-pow((vec3(spectrum) - vec3(.02, .5, .98)) / .37, vec3(2.0)));
      color += scene(source + dispersion * (spectrum - .5)) * weights;
      energy += weights;
    }
    color /= max(energy, vec3(.001));
    float lensMask = 1.0 - smoothstep(.93, 1.0, radius);
    gl_FragColor = vec4(mix(scene(p), color, lensMask), 1.0);
  }
`;

export function createRibbonRenderer(
  canvas: HTMLCanvasElement,
  onReady: (ready: boolean) => void,
): RibbonRenderer | null {
  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
  });
  if (!gl) return null;

  let disposed = false;
  let textureReady = false;
  const atlas = new Image();

  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) throw new Error("Unable to allocate ribbon shader");
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader) || "Ribbon shader failed");
    }
    return shader;
  };

  try {
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!program) throw new Error("Unable to allocate ribbon program");
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || "Ribbon linking failed");
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const names = [
      "resolution",
      "pixelRatio",
      "rowY",
      "cardHeight",
      "cardWidth",
      "cardGap",
      "itemCount",
      "offset",
      "lensStrength",
      "fade",
      "zoom",
      "motionScale",
      "opticalSamples",
      "projectAtlas",
    ] as const;
    const uniforms = Object.fromEntries(
      names.map((name) => [name, gl.getUniformLocation(program, name)]),
    ) as Record<(typeof names)[number], WebGLUniformLocation | null>;

    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([22, 22, 22, 255]),
    );
    gl.uniform1i(uniforms.projectAtlas, 0);

    atlas.onload = () => {
      if (disposed) return;
      if (atlas.width > gl.getParameter(gl.MAX_TEXTURE_SIZE)) {
        onReady(false);
        return;
      }
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        atlas,
      );
      textureReady = gl.getError() === gl.NO_ERROR;
      onReady(textureReady);
    };
    atlas.onerror = () => {
      if (!disposed) onReady(false);
    };
    atlas.src = "/images/home/ribbon/hero-atlas.webp";

    let bounds = { width: 1, height: 1, rowY: 0, ratio: 1 };
    const resize = (width: number, height: number, rowY: number) => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      bounds = { width, height, rowY, ratio };
      const pixelWidth = Math.round(width * ratio);
      const pixelHeight = Math.round(height * ratio);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const draw = (frame: RibbonFrame) => {
      if (disposed || !textureReady || gl.isContextLost()) return false;
      // Always match the size the canvas is shown at. If the first
      // measurement came before layout settled (a cold first visit), a
      // stale buffer would be stretched over the hero as a blown-up image.
      const shownWidth = canvas.clientWidth;
      const shownHeight = canvas.clientHeight;
      if (!shownWidth || !shownHeight) return false;
      if (
        shownWidth !== bounds.width ||
        shownHeight !== bounds.height ||
        canvas.width !== Math.round(shownWidth * bounds.ratio) ||
        canvas.height !== Math.round(shownHeight * bounds.ratio)
      ) {
        const rowShare = bounds.height > 1 ? bounds.rowY / bounds.height : 0.5;
        resize(shownWidth, shownHeight, rowShare * shownHeight);
      }
      gl.uniform2f(uniforms.resolution, bounds.width, bounds.height);
      gl.uniform1f(uniforms.pixelRatio, bounds.ratio);
      gl.uniform1f(uniforms.rowY, bounds.rowY);
      gl.uniform1f(uniforms.cardHeight, frame.geometry.cardHeight);
      gl.uniform1f(uniforms.cardWidth, frame.geometry.cardWidth);
      gl.uniform1f(uniforms.cardGap, frame.geometry.gap);
      gl.uniform1f(uniforms.itemCount, frame.geometry.count);
      gl.uniform1f(uniforms.offset, frame.offset);
      // Phones get a flat, straight ribbon: no lens bend.
      gl.uniform1f(uniforms.lensStrength, frame.compact ? 0 : frame.lens);
      gl.uniform1f(uniforms.fade, frame.fade);
      gl.uniform1f(uniforms.zoom, Math.max(0.05, frame.zoom));
      gl.uniform1f(
        uniforms.motionScale,
        1 - Math.min(0.07, Math.abs(frame.velocity) * 0.028),
      );
      gl.uniform1i(uniforms.opticalSamples, frame.compact ? 8 : 16);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      return true;
    };

    const loseContext = (event: Event) => {
      event.preventDefault();
      textureReady = false;
      if (!disposed) onReady(false);
    };
    canvas.addEventListener("webglcontextlost", loseContext);

    return {
      resize,
      draw,
      destroy: () => {
        disposed = true;
        atlas.onload = null;
        atlas.onerror = null;
        canvas.removeEventListener("webglcontextlost", loseContext);
        gl.deleteTexture(texture);
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertex);
        gl.deleteShader(fragment);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      },
    };
  } catch {
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return null;
  }
}
