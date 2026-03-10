export interface Pillar {
  title: string;
  description: string;
  iconName: 'Layout' | 'Users' | 'Award' | 'TrendingUp';
}

export const pillars: Pillar[] = [
  {
    title: "Structured Programs",
    description: "Programs guide members from insight to execution through defined sessions and outcomes.",
    iconName: "Layout"
  },
  {
    title: "Peer Accountability",
    description: "Builders collaborate, review each other’s ideas, and move projects forward together.",
    iconName: "Users"
  },
  {
    title: "Expert Guidance",
    description: "Industry experts, mentors, and facilitators provide real-world feedback and insight.",
    iconName: "Award"
  },
  {
    title: "Revenue-Aligned Execution",
    description: "Programs are designed to help members validate ideas, build products, and create monetizable outcomes.",
    iconName: "TrendingUp"
  }
];
