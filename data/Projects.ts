import svg from "./svg";
import reverseSnake from "../Assets/Projects/reverse_snake.png";
import pathVisualization from "../Assets/Projects/path-visual.png";
import timeQuest from "../Assets/Projects/time_quest.png";
import lottery from "../Assets/Projects/lotteryDapp.png";
import nft_ocean from "../Assets/Projects/nft-ocean.png";
import portfolio from "../Assets/Projects/Portfolio.png";

const Projects = [
  {
    Id: 1,
    Title: "GlyceraCare",
    Description:
      "GlyceraCare is a modern, responsive web application designed to showcase the brand's commitment to natural skincare through an interactive and visually striking online experience",
    oneLineDescription:
      "A decentralized e-commerce for creating, buying, and selling soaps",
    Icon: [
      {
        id: 6,
        name: "Html",
        purpose: "Markup language",
        image: svg.html,
      },
      {
        id: 7,
        name: "css",
        purpose: "Styling language",
        image: svg.css,
      },
      {
        id: 1,
        name: "React",
        purpose: "UI library",
        image: svg.react,
      },
      {
        id: 2,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 5,
        name: "Typescript",
        purpose: "Superset of JavaScript",
        image: svg.typeScript,
      },
      {
        id: 6,
        name: "Supabase",
        purpose: "Database toolkit",
        image: svg.prisma,
      },
      {
        id: 7,
        name: "Tailwind CSS",
        purpose: "Utility-first CSS framework",
        image: svg.tailwind,
      },
    ],
    Image: nft_ocean,
    DemoLink: "https://aarav2002.github.io/Glyceracare/",
    ProjectLink: "https://github.com/Aarav2002/Glyceracare",
  },

  {
    Id: 2,
    Title: "Portfolio",
    Description:
      "Next Level Portfolio is a modern web portfolio crafted using Next.js, featuring a sleek design and interactive elements to highlight professional skills and showcase various projects.",
    oneLineDescription:
      "A stylish and interactive portfolio website built with Next.js showcasing skills and projects.",
    Icon: [
      {
        id: 1,
        name: "Nextjs",
        purpose: "Superset of React",
        image: svg.nextJs,
      },
      {
        id: 2,
        name: "Typescript",
        purpose: "Superset of JavaScript",
        image: svg.typeScript,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        purpose: "Utility-first CSS framework",
        image: svg.tailwind,
      },
      {
        id: 4,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 5,
        name: "Framer Motion",
        purpose: "Production-ready motion library",
        image: svg.framer,
      },
      {
        id: 6,
        name: "Html",
        purpose: "Markup language",
        image: svg.html,
      },
      {
        id: 7,
        name: "css",
        purpose: "Styling language",
        image: svg.css,
      },
    ],
    Image: portfolio,
    DemoLink: "/",
    ProjectLink: "/",
  },

  {
    Id: 3,
    Title: "Class Reminder app",
    Description:
      " Created an Android app to automate class reminders with an intuitive UI with custom alarms and snooze options using Android Studio and Kotlin",
    oneLineDescription:
      " A Android-based application ensuring student wellness",
    Icon: [
      {
        id: 1,
        name: "Android Studio",
        purpose: "Development",
        image: svg.android,
      },
      {
        id: 2,
        name: "Kotlin",
        purpose: "language",
        image: svg.kotlin,
      },
    ],
    Image: lottery,
    DemoLink: "/Projects",
    ProjectLink: "/Projects",
  },

  {
    Id: 4,
    Title: "DSA Visualization",
    Description:
      "Built an interactive DSA algorithm visualization tool to simulate algorithm execution, enhancing user engagement.",
    oneLineDescription: "Path finding and maze generation using algorithms.",
    Icon: [
      {
        id: 1,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 2,
        name: "p5.js",
        purpose: "Creative coding library",
        image: svg.p5Js,
      },
      {
        id: 3,
        name: "Html",
        purpose: "Markup language",
        image: svg.html,
      },
      {
        id: 4,
        name: "Css",
        purpose: "Styling language",
        image: svg.css,
      },
    ],
    Image: pathVisualization,
    DemoLink: "/",
    ProjectLink: "/",
  },
];

export default Projects;
