# Portfolio design versions

## Current default

The approved dark design is the homepage at `/`. Implementation lives in
`src/components/home/dark/`; the entry point is
`src/components/home/page.tsx`. It preserves the approved `#E71806` accent,
`-0.015em` display tracking, original portrait, five projects and nine-view
optical ribbon. The ribbon uses original portfolio images/video stills,
keyboard navigation, drag/inertia, reduced motion and an image-only fallback.
About and the MindScape case remain intact.

## Preserved light version

- View `/light-version`; a discreet link is in the dark homepage footer.
- Entry component: `src/components/home/lightPage.tsx`.
- Original Hero, gallery, highlights, skills strip, contact components, fonts,
  photos, poppies and videos have not been deleted.
- The saved page includes the latest local light-version edits, not just the
  last published Git commit.
- The preserved route has `noindex, nofollow` metadata to avoid duplicate SEO.

For a simple return to the light homepage, use `LightHomePage` from
`src/components/home/lightPage.tsx` in `src/app/page.tsx`, wrap it in the original
`<main className="min-h-screen bg-background">`, and pass `homePath="/"`.
Do not reset the repository or overwrite subsequent user changes.

## Complete pre-migration snapshot

Local archive: `.git/local-backups/light-portfolio-2026-10-21.tar.gz`.

- 148 working-tree files, including local source changes and untracked
  portfolio assets.
- Base commit: `fed24edd4208c6fb067fdd2df338a820cb8fec75`.
- SHA-256: `49a5103450b122c0525096f2c00b11a5a220d4d4432f9643a6fa935eb82c5c0b`.
- Dependencies, build output, Git internals, dotenv and key files are excluded.
- This archive lives in `.git` and is not automatically committed or published.

Extract the archive into a **new directory** for inspection or restoration.
Never extract it over a later working tree without reviewing the differences.
Install dependencies there and use a different free development port.

## Font licence gate before publication

Inter Tight is distributed under the SIL Open Font License; the included
licence is `src/app/fonts/InterTight-OFL.txt`.

The display italic now uses Instrument Serif Italic (SIL Open Font License,
`public/fonts/InstrumentSerif-OFL.txt`). The earlier research copy of
Apophis Display Medium Italic (`src/app/fonts/ApophisDisplay-MediumItalic.woff2`)
is no longer referenced and must not be committed or published without a
confirmed webfont licence.

The isolated research prototype on port 3101 is not required to run the site.
The main development preview is `http://localhost:3000/`.
