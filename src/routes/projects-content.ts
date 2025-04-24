import type { ContentChunk } from "./content.ts";

type ProjectImage = {
  url: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  images: ProjectImage[];
  contentChunks: ContentChunk[];
};

export type ProjectPreview = {
  slug: string;
  name: string;
  image: ProjectImage;
};

export const projects: Project[] = [
  {
    slug: "fluesterpost",
    name: "Flüsterpost",
    images: [
      { url: "fluesterpost_1.png", label: "label1" },
      { url: "fluesterpost_2.png", label: "label2" },
      { url: "fluesterpost_3.png", label: "label3" },
      { url: "fluesterpost_4.png", label: "label4" },
    ],
    contentChunks: [
      {
        label: "Challenge",
        type: "text",
        content:
          "Product description text if needed outlines what you have done and how you have don it as a technical breakdown, which challenges you have solved, and why you did the project or within which company, and what your role was.",
      },
      {
        label: "Solution",
        type: "text",
        content:
          "got to engage my passion for human languages. look at this design! look at these funny examples!",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: [
          "Angular",
          "React",
          "Sagas",
          "Google Translate API",
          "Express.js",
          "node.js",
          "CSS",
        ],
      },
    ],
  },
  {
    slug: "taxfix",
    name: "Taxfix",
    images: [
      { url: "taxfix_1.png", label: "symbolic tax logic" },
      { url: "taxfix_2_mobile.png", label: "Taxfix mobile app" },
    ],
    contentChunks: [
      {
        label: "Challenge",
        type: "text",
        content:
          "Product description text if needed outlines what you have done and how you have don it as a technical breakdown, which challenges you have solved, and why you did the project or within which company, and what your role was.",
      },
      {
        label: "Solution",
        type: "text",
        content: "many apps! early days; new markets; TaxML Editor...",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["React", "React Native", "Angular", "node.js"],
      },
    ],
  },
  {
    slug: "txtwerk",
    name: "TXTWerk (Neofonie)",
    images: [],
    contentChunks: [
      {
        label: "Challenge",
        type: "text",
        content: "hard times",
      },
      {
        label: "Solution",
        type: "text",
        content: "good solutions",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["Angular", "CSS"],
      },
    ],
  },
  {
    slug: "neofonie",
    name: "Neofonie (mycare.de, OBI)",
    images: [],
    contentChunks: [
      {
        label: "Challenge",
        type: "text",
        content: "hard times",
      },
      {
        label: "Solution",
        type: "text",
        content: "good solutions",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: [
          "React",
          "Sagas",
          "Google Translate API",
          "Express.js",
          "node.js",
          "CSS",
        ],
      },
    ],
  },
  {
    slug: "farklife",
    name: "Farklife",
    images: [{ url: "farklife_1_standard.png", label: "Farklife game" }],
    contentChunks: [
      {
        label: "Challenge",
        type: "text",
        content: "none",
      },
      {
        label: "Solution",
        type: "text",
        content:
          "uh, don't remember much. but I like the game, so it was fun to build it!",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["React", "JavaScript"],
      },
    ],
  },
  {
    slug: "portfolio",
    name: "Personal portfolio",
    images: [],
    contentChunks: [
      {
        label: "Challenge",
        type: "text",
        content: "it's this site right here!",
      },
      {
        label: "Solution",
        type: "text",
        content: "recursion! hehe",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["Svelte", "sveltekit"],
      },
    ],
  },
];
