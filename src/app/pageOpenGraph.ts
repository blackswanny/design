import type { Metadata } from "next";

// Next merges metadata shallowly, so a page that doesn't set its own
// openGraph inherits the layout's og:url ("/"). LinkedIn and other link
// previews follow og:url, which sent every shared page to the home page.
// Each page builds its own block here so the shared link stays on that page.
export function pageOpenGraph(
  path: string,
  title: string,
  description: string,
): Metadata["openGraph"] {
  return {
    title,
    description,
    url: path,
    siteName: "Hanna Gomozova",
    type: "website",
    // A page-level openGraph block drops the root opengraph-image file, so
    // point back at it explicitly.
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hanna Gomozova, Product Designer in the San Francisco Bay Area",
      },
    ],
  };
}
