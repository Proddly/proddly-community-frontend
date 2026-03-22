export interface Program {
  id: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  schedule: string;
  cta: string;
  link: string;
}

export const programs: Program[] = [
  {
    id: "build-or-bust",
    name: "Build or Bust",
    tagline: "Where Product Ideas Get Tested.",
    description: "Build or Bust is a flagship TPC session where real product ideas are dissected live. Builders walk through their thinking while the community explores the strategy, assumptions, and execution behind the idea. This program helps members sharpen their product thinking while learning how successful builders approach validation and decision-making.",
    details: [
      "Live product dissection",
      "Strategy and assumption testing",
      "Feedback from the community",
      "Learn validation frameworks"
    ],
    schedule: "2nd Saturday of every month",
    cta: "Attend Build or Bust",
    link: "https://luma.com/build_or_bust" 
  },
  {
    id: "forge-lab",
    name: "Forge Lab",
    tagline: "Solve Real Problems. Leave With Clarity.",
    description: "Forge Lab is a structured problem-solving session where builders and professionals bring real challenges into a collaborative “lab” environment. Ideas are explored, blockers are unpacked, and participants leave with practical next steps. Forge Lab positions TPC as a thinking partner for builders navigating real decisions and growth.",
    details: [
      "Collaborative problem solving",
      "Unpack real blockers",
      "Actionable next steps",
      "Peer-to-peer consulting"
    ],
    schedule: "3rd Saturday of every month",
    cta: "Enter Forge Lab",
    link: "https://luma.com/forge_lab"
  },
  {
    id: "ama-saturdays",
    name: "AMA Saturdays",
    tagline: "Ask. Learn. Grow.",
    description: "A relaxed but insight-driven session where members engage directly with experienced product leaders, founders, and innovators across industries. AMA Saturdays create space for honest conversations about product thinking, career growth, and real-world lessons from building and scaling products.",
    details: [
      "Direct access to industry veterans",
      "Unfiltered Q&A sessions",
      "Networking with peers",
      "Focus on career and personal growth"
    ],
    schedule: "Last Saturday of every month",
    cta: "Join the Next AMA",
    link: "https://luma.com/ama_saturdays" 
  }
];
