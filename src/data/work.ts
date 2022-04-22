import { SiApple, SiSpotify } from "react-icons/si";
import filler from "../assets/images/fillerConcept.jpg";

const streamingPlatforms = [
  {
    icon: SiApple,
    color: "#fc3c44",
    link: "https://www.apple.com/apple-music/",
  },
  {
    icon: SiSpotify,
    color: "#1DB954",
    link: "https://www.spotify.com/us/",
  },
];

export const projectData = [
  {
    name: "Music",
    image: filler,
    externalLinks: true,
    icons: streamingPlatforms,
  },

  {
    name: "Music",
    image: filler,
    externalLinks: true,
    icons: streamingPlatforms,
  },
  {
    name: "Filler",
    image: filler,
    externalLinks: false,
  },
  {
    name: "Filler",
    image: filler,
    externalLinks: false,
  },
];
