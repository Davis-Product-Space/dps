export interface Project {
  svgSrc: string;
  title: string;
  groupMembers: string;
  shortDescription: string;
  onViewPitchDeck: () => void;
  onViewDesigns: () => void;
}

export const springProjects: Project[] = [
  {
    svgSrc: "/images/Capstones/Spring25/HoneDisplay.svg",
    title: "Hone",
    groupMembers: "Amelia Uytingco, Cindy Xing, Taiki Lowe, Zayd Musa",
    shortDescription: "Brief description of the project",
    onViewPitchDeck: () => console.log("View pitch deck"),
    onViewDesigns: () => console.log("View designs")
  },
  {
    svgSrc: "/images/Capstones/Spring25/MooveDisplay.svg",
    title: "MOOVE",
    groupMembers: "Anwesha Mohanty, Haolin Zhang, Isaac Villegas, Kavin Agarwal",
    shortDescription: "Brief description of the project",
    onViewPitchDeck: () => console.log("View pitch deck"),
    onViewDesigns: () => console.log("View designs")
  },
  {
    svgSrc: "/images/Capstones/Spring25/DeclassifyDisplay.svg",
    title: "deCLASSify",
    groupMembers: "Andy Tran, Elango Ketheesan, Sahana Narayan, Yash Pradhan",
    shortDescription: "Brief description of the project",
    onViewPitchDeck: () => console.log("View pitch deck"),
    onViewDesigns: () => console.log("View designs")
  },
  {
    svgSrc: "/images/Capstones/Spring25/HeardDisplay.svg",
    title: "Heard",
    groupMembers: "Adrian Rozo, Andrew Fojas, Ken Hoang, Sambhav Agarwal",
    shortDescription: "Brief description of the project",
    onViewPitchDeck: () => console.log("View pitch deck"),
    onViewDesigns: () => console.log("View designs")
  }
];
