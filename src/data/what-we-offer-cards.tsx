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
        description: "An immersive eight-week program for students at all ranges of experience with product."
      },
      {
        id: "case-studies", 
        icon: "/images/case_studies.svg",
        title: "Case Studies",
        description: "Work on case studies to put your knowledge into practice alongside your cohort members."
      },
      {
        id: "learn-product",
        icon: "/images/learn_product.svg", 
        title: "Learn Product",
        description: "Learn product through in-person workshops from industry professionals"
      },
      {
        id: "your-cohort",
        icon: "/images/cohort.svg",
        title: "Your Cohort", 
        description: "Work with your four member cohort to tackle real-world product challenges together."
      }
    ]
  },
  {
    key: "program-structure",
    sectionTitle: "Program Structure",
    cards: [
      {
        id: "weekly-workshops",
        icon: "/images/calendar.svg",
        title: "Weekly Workshops",
        description: "Every Tuesday from 7-9PM, join interactive workshops led by industry professionals."
      },
      {
        id: "hands-on-projects",
        icon: "/images/case_studies.svg", 
        title: "Hands-On Projects",
        description: "Apply your learning through real case studies and practical exercises."
      },
      {
        id: "skill-building",
        icon: "/images/learn_product.svg",
        title: "Skill Building", 
        description: "Master essential PM skills: user research, wireframing, and product strategy."
      },
      {
        id: "peer-collaboration",
        icon: "/images/cohort.svg",
        title: "Peer Collaboration",
        description: "Connect with like-minded students and build lasting professional relationships."
      }
    ]
  },
  {
    key: "career-outcomes",
    sectionTitle: "Career Outcomes", 
    cards: [
      {
        id: "job-placement",
        icon: "/images/calendar.svg",
        title: "Job Placement",
        description: "90% of alumni land PM internships or full-time roles within 6 months of graduation."
      },
      {
        id: "portfolio-development",
        icon: "/images/case_studies.svg",
        title: "Portfolio Development", 
        description: "Build a comprehensive PM portfolio showcasing your case studies and projects."
      },
      {
        id: "industry-connections",
        icon: "/images/learn_product.svg",
        title: "Industry Connections",
        description: "Network with PMs from top tech companies and receive mentorship opportunities."
      },
      {
        id: "ongoing-support",
        icon: "/images/cohort.svg", 
        title: "Ongoing Support",
        description: "Join our alumni community for continued career support and networking opportunities."
      }
    ]
  },
  {
    key: "mentorship-program",
    sectionTitle: "Mentorship Program",
    cards: [
      {
        id: "one-on-one",
        icon: "/images/learn_product.svg",
        title: "One-on-One Guidance",
        description: "Receive personalized mentorship from senior PMs to accelerate your career growth."
      },
      {
        id: "industry-insights", 
        icon: "/images/case_studies.svg",
        title: "Industry Insights",
        description: "Gain valuable insights and advice from experienced PMs across different companies."
      },
      {
        id: "goal-setting",
        icon: "/images/calendar.svg", 
        title: "Goal Setting",
        description: "Work with mentors to set and achieve your PM career objectives."
      },
      {
        id: "feedback-loop",
        icon: "/images/cohort.svg",
        title: "Feedback Loop", 
        description: "Regular check-ins and constructive feedback to improve your PM skills."
      }
    ]
  }
];