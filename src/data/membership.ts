export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  cta: string;
  highlight?: boolean;
  targetAudience: string;
}

export const membershipTiers: MembershipTier[] = [
  {
    id: "builder",
    name: "TPC Builder",
    tagline: "Learn. Execute. Earn.",
    description: "For founders, product managers, engineers, designers, and builders who want to grow through structured community programs.",
    benefits: [
      "Access to the TPC community ecosystem",
      "Access to Proddly Learn and curated product resources",
      "Discounted access to TPC programs and workshops",
      "Priority access to strategy and consultation sessions",
      "Opportunities to collaborate on ideas and product builds",
      "Priority access to partners' gigs and job opportunities"
    ],
    cta: "Join as a Builder",
    highlight: true,
    targetAudience: "For founders, product professionals, and aspiring builders"
  },
  {
    id: "partner",
    name: "TPC Partner",
    tagline: "Support. Access. Grow Talent.",
    description: "For organizations and experienced professionals who want to support the builder ecosystem and collaborate with the community.",
    benefits: [
      "Access to emerging product builders and talent",
      "Opportunities to mentor and guide builders",
      "Visibility within the Proddly ecosystem",
      "Participation in curated programs and community events",
      "Opportunity to collaborate on innovation initiatives",
      "Early access to products, ideas, and builder projects"
    ],
    cta: "Become a Partner",
    highlight: false,
    targetAudience: "For organizations, mentors, and ecosystem leaders"
  }
];

export const builderParticipationPaths = [
  {
    name: "Contributors",
    description: "Builders who actively support the community through operational roles such as community moderators, engagement facilitators and program assistants. Contributors help maintain the quality and structure of the ecosystem."
  },
  {
    name: "Catalysts",
    description: "Builders who prefer a subscription-based participation path. Catalysts support the ecosystem financially and gain access to additional opportunities and structured support without community operational role requirements."
  }
];

export const partnerParticipationPaths = [
  {
    name: "Experts",
    description: "Experienced professionals who provide mentorship, guidance, and specialized knowledge to builders within the community."
  },
  {
    name: "Sponsors",
    description: "Organizations or individuals who provide financial support or resources to fund community initiatives, events, and programs."
  },
  {
    name: "Investors",
    description: "Individuals or firms looking to discover and invest in promising projects and startups emerging from the TPC ecosystem."
  },
  {
    name: "Hiring Partners",
    description: "Companies and recruiters seeking to connect with and hire top talent from the pool of skilled builders in the community."
  }
];
