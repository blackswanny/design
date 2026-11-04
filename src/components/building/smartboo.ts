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
    "A voice care log for every pet in the house. Say what happened, and the app logs it, reminds you and shows the whole family.",
  surveyUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSctmTbRnMgishL8bN8yVVKF2j1-daLY1nXwzkJOYT-dib_tHA/viewform",
  stack: [
    "Claude Code",
    "Vite",
    "React",
    "TypeScript",
    "Tailwind",
    "Storybook",
    "Supabase",
    "PWA",
  ],
  log: [
    {
      title: "Research",
      text: "A survey of pet owners and about 2,900 App Store reviews of nearly 40 pet apps, ranked by pain.",
      status: "done",
    },
    {
      title: "Concept",
      text: "Three pillars: capture by voice, care together, own the record. For every species, from a dog to a fish tank.",
      status: "done",
    },
    {
      title: "Design and build",
      text: "Design system, voice capture and the Today screen, built with Claude Code and tested with real owners.",
      status: "now",
    },
    {
      title: "Beta",
      text: "Families use it at home every day. Fixes from real use and the first metrics.",
      status: "next",
    },
  ] satisfies BuildStep[],
  pillars: [
    {
      title: "Capture",
      text: "Faster to log than to remember. One sentence can cover several pets, events and reminders.",
    },
    {
      title: "Care together",
      text: "One home, one plan. Everyone sees what's done today, by whom, and what's left.",
    },
    {
      title: "Own the record",
      text: "The full history stays with the owner: never lost, easy to export, ready for the vet.",
    },
  ],
  insights: [
    {
      title: "Logging dies at the third tap",
      text: "A quick note turns into a form, a picker and a save button. Owners give up before the habit forms.",
    },
    {
      title: "Nobody knows who did what",
      text: "“Did you feed the cat?” Missed or doubled meds were the most serious complaints we read.",
    },
    {
      title: "My pet is “Other”",
      text: "Rabbit, gecko and fish-tank owners can’t log grams, sheds or water tests in apps built for dogs.",
    },
  ],
  principles: [
    {
      title: "AI suggests, people confirm",
      text: "Nothing is saved until a person checks the cards. If something is unclear, it asks one question.",
    },
    {
      title: "Never a diagnosis",
      text: "Worrying symptoms get a calm nudge to call the vet, from a fixed list. No advice on meds or doses.",
    },
    {
      title: "Every pet, no paywall",
      text: "No limit on pets, and export is always free. The record belongs to the owner.",
    },
  ],
} as const;
