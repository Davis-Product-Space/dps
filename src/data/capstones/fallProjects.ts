export interface Project {
  svgSrc: string;
  title: string;
  groupMembers: string;
  shortDescription: string;
  onViewPitchDeck: () => void;
  onViewDesigns: () => void;
}

export const fallProjects: Project[] = [
  {
    svgSrc: "/images/HoneDisplay.svg",
    title: "Curate",
    groupMembers: "Amber Zhang, Arshiya Banerjee, Clara Yin, John Missal",
    shortDescription: "Explore content your friends have viewed and shared right in your feed.",
    onViewPitchDeck: () => console.log("View pitch deck"),
    onViewDesigns: () => console.log("View designs")
  },
  {
    svgSrc: "/images/HoneDisplay.svg",
    title: "Sync",
    groupMembers: "Anita Thata, Caitlin Chan, Jason Zhang, Puja Devarasetty",
    shortDescription: "The Instagram Stories you know, just with more voices.",
    onViewPitchDeck: () => console.log("View pitch deck"),
    onViewDesigns: () => console.log("View designs")
  },
  {
    svgSrc: "/images/HoneDisplay.svg",
    title: "Scraps",
    groupMembers: "Abirami Kathiresan, Krisha Bhat, Nicole Yanuaria, Sruthi Sridhar, Wing Lai",
    shortDescription: "Showcase your moods and moments on Instagram - your way.",
    onViewPitchDeck: () => console.log("View pitch deck"),
    onViewDesigns: () => console.log("View designs")
  },
  {
    svgSrc: "/images/HoneDisplay.svg",
    title: "Preview",
    groupMembers: "Alex Sunga, Divleen Lota, Gayatri Brijesh, Phuong Thy Nguyen",
    shortDescription: "Plan and visualize your posts directly through Instagram.",
    onViewPitchDeck: () => console.log("View pitch deck"),
    onViewDesigns: () => console.log("View designs")
  }
];
