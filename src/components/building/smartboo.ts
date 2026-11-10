// SmartBoo: the pet care app I'm designing and building in public during the
// Design Engineer course. To show progress, move a stage from "next" to
// "now" or "done". The home page and /projects/smartboo read everything
// from here.

export type StepStatus = "done" | "now" | "next";

export type BuildStep = {
  title: string;
  text: string;
  status: StepStatus;
};

export const smartboo = {
  name: "SmartBoo",
  summary:
    "Everything about your pets in one place. Hand Boo a vet paper or tell it what happened, and it files it in the right pet's folder and reminds you what's due.",
  surveyUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSctmTbRnMgishL8bN8yVVKF2j1-daLY1nXwzkJOYT-dib_tHA/viewform",
  /** The clickable Figma prototype (iPhone 14 frame, starts on Today). */
  prototypeUrl:
    "https://www.figma.com/proto/aqt5PinybJw1SsotXrtLlP/Smartboo---Pet-care-app?node-id=59-2444&starting-point-node-id=59%3A2444&scaling=scale-down&content-scaling=fixed&hide-ui=1",
  prototypeEmbedUrl:
    "https://embed.figma.com/proto/aqt5PinybJw1SsotXrtLlP/Smartboo---Pet-care-app?node-id=59-2444&starting-point-node-id=59%3A2444&scaling=scale-down&content-scaling=fixed&hide-ui=1&hotspot-hints=0&embed-host=hanna-vision",
  stack: [
    "Claude Code",
    "Vite",
    "React",
    "TypeScript",
    "Tailwind",
    "Capacitor",
    "Storybook",
    "Cloudflare",
  ],
  log: [
    {
      title: "Research",
      text: "5 owner interviews (more in progress), a survey with about 50 responses so far and about 2,900 App Store reviews of nearly 40 pet apps.",
      status: "done",
    },
    {
      title: "Design",
      text: "The concept, 18 screens and a clickable prototype in Figma, plus a design system in Figma Variables with Boo's indigo.",
      status: "done",
    },
    {
      title: "First build",
      text: "The first version runs on the iPhone simulator: Today, Schedule, pet folders, Share and Boo's sheet, with sample pets. React and Capacitor, built with Claude Code.",
      status: "now",
    },
    {
      title: "Demo",
      text: "A working iOS demo on TestFlight on December 2, then usability tests with real owners.",
      status: "next",
    },
  ] satisfies BuildStep[],
  insights: [
    {
      title: "Nobody logs every day",
      text: "Most owners look up or record pet info only a few times a year, and most have never used a pet app. The real competitor is memory, paper and email.",
    },
    {
      title: "The paper is the moment",
      text: "Back from the vet, or a PDF in email: that's when people want to put it somewhere safe. It's the install moment and the aha moment.",
    },
    {
      title: "“Can you show the shots?”",
      text: "Boarding, groomers and new vets ask for records, and owners can't pull them together fast. Due dates for vaccines and rechecks slip.",
    },
  ],
  edgeCases: [
    {
      title: "“Which cat?”",
      text: "If a sentence could mean more than one pet, Boo doesn't guess. It asks with choices: Milo · Cleo · Both.",
    },
    {
      title: "“Is this the same Rocky?”",
      text: "A paper for a name that's already in the pack goes into that folder. When Boo isn't sure, it asks first.",
    },
    {
      title: "Boo isn't sure",
      text: "Fields Boo can't read clearly are highlighted on the review card, like a due date with a question mark. One tap to fix.",
    },
    {
      title: "It sounds serious",
      text: "Red-flag symptoms from a fixed list get “That sounds worth a call to your vet today” and a button to call the vet. No diagnosis.",
    },
  ],
  principles: [
    {
      title: "Never makes things up",
      text: "Missing data stays empty or becomes a question. Answers come only from the records, with a link to the source.",
    },
    {
      title: "Never a diagnosis",
      text: "No advice on meds or doses. Worrying symptoms get a calm nudge to call the vet.",
    },
    {
      title: "Every pet, no paywall",
      text: "Dogs and cats, but also rabbits, birds and reptiles, with weight in grams. No limit on pets, and export is always free.",
    },
  ],
} as const;
