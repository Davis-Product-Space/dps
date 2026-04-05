export interface Project {
  svgSrc: string;
  title: string;
  groupMembers: string;
  shortDescription: string;
  onViewPitchDeck: string;
  onViewDesigns: string;
}

export const clientProjects: Project[] = [
  {
    svgSrc: "/images/Projects/Winter2026Client/Manequin.png",
    title: "Manequin",
    groupMembers: "Ashwin, Saiyuktha, Joelle, Amala",
    shortDescription: "Client project for Manequin.",
    onViewPitchDeck: "https://canva.link/2w93irw180ifyu5",
    onViewDesigns: ""
  },
  {
    svgSrc: "/images/Projects/Winter2026Client/Woodstocks.png",
    title: "Woodstock's",
    groupMembers: "Isaac, Leland N., Leland C., Lauren",
    shortDescription: "Client project for Woodstock's Pizza.",
    onViewPitchDeck: "https://pitch.com/v/woodstocks-pizza-nmdbck",
    onViewDesigns: ""
  },
  {
    svgSrc: "/images/Projects/Winter2026Client/Pearla.png",
    title: "Pearla",
    groupMembers: "Armaan, Raj, Ryan, Suhana",
    shortDescription: "Client project for Pearla.",
    onViewPitchDeck: "https://canva.link/utouy9ex2yia4ep",
    onViewDesigns: ""
  },
  {
    svgSrc: "/images/Projects/Winter2026Client/Homezada.png",
    title: "Homezada",
    groupMembers: "Matthew, Tak, Elizabeth",
    shortDescription: "Client project for Homezada.",
    onViewPitchDeck: "#",
    onViewDesigns: ""
  }
];
