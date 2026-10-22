// Builds the 3 × 3 texture atlas used by the hero ribbon shader.
// Usage: node scripts/build-ribbon-atlas.mjs
// Sources are taken from public/images/home/ribbon/hero/ in filename order,
// which must match the order of `ribbonImages` in
// src/components/home/dark/projects.ts.
import { readdir } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const sourceDir = "public/images/home/ribbon/hero";
const output = "public/images/home/ribbon/hero-atlas.webp";

// Must stay in sync with the constants in ribbonRenderer.ts.
const cell = { width: 640, height: 424 };
const gutter = 4;
const columns = 3;
const rows = 3;
const background = { r: 18, g: 18, b: 18, alpha: 1 };

const files = (await readdir(sourceDir))
  .filter((file) => file.endsWith(".webp"))
  .sort();

if (files.length !== columns * rows) {
  throw new Error(`Expected ${columns * rows} images, found ${files.length}`);
}

const composites = await Promise.all(
  files.map(async (file, index) => {
    const input = await sharp(path.join(sourceDir, file))
      .resize({
        width: cell.width - gutter * 2,
        height: cell.height - gutter * 2,
        fit: "contain",
        background,
      })
      .toBuffer();
    return {
      input,
      left: (index % columns) * cell.width + gutter,
      top: Math.floor(index / columns) * cell.height + gutter,
    };
  }),
);

await sharp({
  create: {
    width: cell.width * columns,
    height: cell.height * rows,
    channels: 4,
    background,
  },
})
  .composite(composites)
  .webp({ quality: 92 })
  .toFile(output);

console.log(`Wrote ${output} from ${files.length} images`);
