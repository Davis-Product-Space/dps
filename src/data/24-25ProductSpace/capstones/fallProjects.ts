export interface Project {
  svgSrc: string;
  title: string;
  groupMembers: string;
  shortDescription: string;
  onViewPitchDeck: string;
  onViewDesigns: string;
}

export const fallProjects: Project[] = [
  {
    svgSrc: "/images/Capstones/Fall24/CurateDisplay.svg",
    title: "Curate",
    groupMembers: "Amber Zhang, Arshiya Banerjee, Clara Yin, John Missal",
    shortDescription: "Explore content your friends have viewed and shared right in your feed.",
    onViewPitchDeck: "",
    onViewDesigns: "https://www.figma.com/design/KX3LDR1jHRztBeLaEdHgeA/Instagram-Curate-Page-Mockup?node-id=0-1&t=3RrkFbEO8f4BPl40-1"
  },
  {
    svgSrc: "/images/Capstones/Fall24/SyncDisplay.svg",
    title: "Sync",
    groupMembers: "Anita Thata, Caitlin Chan, Jason Zhang, Puja Devarasetty",
    shortDescription: "The Instagram Stories you know, just with more voices.",
    onViewPitchDeck: "",
    onViewDesigns: "https://www.figma.com/design/NpSpSjGK3GUjdE9eaxqpWx/Sync-Mockups?node-id=2161-433&t=skRW3kG8nYiVjYDc-1"
  },
  {
    svgSrc: "/images/Capstones/Fall24/ScrapsDisplay.svg",
    title: "Scraps",
    groupMembers: "Abirami Kathiresan, Krisha Bhat, Nicole Yanuaria, Sruthi Sridhar, Wing Lai",
    shortDescription: "Showcase your moods and moments on Instagram - your way.",
    onViewPitchDeck: "",
    onViewDesigns: "https://www.figma.com/design/YajKvnFULQ9KHlg1OAdAqI/Hi-Fi-Prototype?node-id=0-1&t=6up85hwdxp67io4Q-1"
  },
  {
    svgSrc: "/images/Capstones/Fall24/PreviewDisplay.svg",
    title: "Preview",
    groupMembers: "Alex Sunga, Divleen Lota, Gayatri Brijesh, Phuong Thy Nguyen",
    shortDescription: "Plan and visualize your posts directly through Instagram.",
    onViewPitchDeck: "https://www.figma.com/design/zUPYykgs0hckZAwkGsnDxT/product-space--team-winx-clerb?node-id=185-8&t=Tv4tmKhpGTkSjpXZ-1",
    onViewDesigns: "https://www.figma.com/design/zUPYykgs0hckZAwkGsnDxT/product-space--team-winx-clerb?node-id=516-3266&t=1sg40nodPnjRv4n3-1"
  }
];
