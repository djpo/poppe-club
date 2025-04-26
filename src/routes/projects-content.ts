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

export const projects: Project[] = [
  {
    slug: "fluesterpost",
    name: "Flüsterpost",
    images: [
      { url: "fluesterpost_3.png", label: "with full translation cycle" },
      { url: "fluesterpost_2.png", label: "mobile view" },
      { url: "fluesterpost_4.png", label: "wireframe" },
    ],
    contentChunks: [
      {
        label: "Description",
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
      { url: "taxfix_1.png", label: "symbolic tax logic editor" },
      { url: "taxfix_2_mobile.png", label: "Taxfix mobile app" },
    ],
    contentChunks: [
      {
        label: "Tasks",
        type: "text",
        content: `– Create, improve, and bugfix mature consumer apps using React Native and React
– Lead rapid implementation of new features and user experiences
– Contribute to the growth and stability of core mobile and web apps in multiple markets (first versions in Italy and France)
– Collaborate with other internal departments and multiple stakeholders
– Take responsibility for maintenance of company-wide technical tools
`,
      },
      {
        label: "(ideas to expand on)",
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
        label: "Description",
        type: "text",
        content:
          "build a frontend app from scratch. the demonstration app enabled marketing of an AI text analysis API to potential clients. used: Angular 16. images to come soon!",
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
        label: "mycare.de",
        type: "text",
        content:
          "maintain webapp frontend, fix bugs, improve performance. assisted launching marketing campaigns. images to come soon!",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["Vue.js", "HTML", "CSS"],
      },
      {
        label: "OBI",
        type: "text",
        content:
          "migrate backend service to use new CRM, consumed by all OBI apps via GraphQL.",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["TypeScript", "GraphQL"],
      },
    ],
  },
  {
    slug: "farklife",
    name: "Farklife",
    images: [
      {
        url: "farklife_1_standard.png",
        label: "counting up the dice",
      },
    ],
    contentChunks: [
      {
        label: "Description",
        type: "text",
        content:
          "a simple project to practice my React skills. I like the real-life dice game called Farkle, so it was fun to build it virtually!",
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
        label: "Description",
        type: "text",
        content: "it's this site right here! more info to come soon. :)",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["Svelte", "SvelteKit", "GitHub Issues"],
      },
    ],
  },
];
