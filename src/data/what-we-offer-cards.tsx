export interface WhatWeOfferCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhatWeOfferPhase {
  key: string;
  sectionTitle: string;
  cards: WhatWeOfferCard[];
}

export const whatWeOfferPhases: WhatWeOfferPhase[] = [
  {
    key: "fellowship",
    sectionTitle: "Fellowship",
    cards: [
      {
        id: "eight-weeks",
        icon: "/images/calendar.svg",
        title: "Eight Weeks",
        description: "An immersive eight-week program for students of all ranges of experience with product."
      },
      {
        id: "case-studies", 
        icon: "/images/learn_product.svg",
        title: "Learn Product",
        description: "Learn product through in-person workshops from industry professionals"
      },
      {
        id: "learn-product",
        icon: "/images/case_studies.svg", 
        title: "Connect With Industry",
        description: "Network with product professionals, mentors, and alumni to grow your industry connections."
      },
      {
        id: "your-cohort",
        icon: "/images/cohort.svg",
        title: "Build With Your Cohort", 
        description: "Collaborate with peers to create and deliver impactful, real-world product deliverables."
      }
    ]
  },
  {
    key: "program-structure",
    sectionTitle: "Capstone",
    cards: [
      {
        id: "weekly-workshops",
        icon: "/images/calendar.svg",
        title: "Product Ideation",
        description: "Following a prompt, collect real user data to identify a pain point and ideate a product to solve your user’s issue."
      },
      {
        id: "hands-on-projects",
        icon: "/images/cohort.svg", 
        title: "Product Marketing",
        description: "Perform user testing to Iterate on your product and create a go-to-market strategy."
      },
      {
        id: "skill-building",
        icon: "/images/learn_product.svg",
        title: "Product Design", 
        description: "Learn and use Figma to create mockups and UI components for your ideated product."
      },
      {
        id: "peer-collaboration",
        icon: "/images/case_studies.svg",
        title: "Capstone Presentation",
        description: "Present your product, your process, and everything in between to a panel of industry-level judges"
      }
    ]
  },
  {
    key: "career-outcomes",
    sectionTitle: "Client", 
    cards: [
      {
        id: "job-placement",
        icon: "/images/calendar.svg",
        title: "Hands-On Industry Experience",
        description: "Gain real-world product experience by solving industry challenges with expert mentorship."
      },
      {
        id: "portfolio-development",
        icon: "/images/case_studies.svg",
        title: "Real-World Solutions & Portfolio Development", 
        description: "Build impactful solutions and showcase them as strong portfolio projects for employers."
      },
      {
        id: "industry-connections",
        icon: "/images/learn_product.svg",
        title: "Industry Connections & Mentorship",
        description: "Connect with professionals, alumni, and peers while receiving personalized mentorship guidance."
      },
      {
        id: "ongoing-support",
        icon: "/images/cohort.svg", 
        title: "Career Preparation & Job Placement Support",
        description: "Access resume workshops, mock interviews, and recruiter connections to land product roles."
      }
    ]
  },
];