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
      { url: "fluesterpost_1_full.png", label: "full translation cycle" },
      { url: "fluesterpost_2_empty_mobile.png", label: "empty (mobile)" },
      { url: "fluesterpost_3_full_mobile.png", label: "full (mobile)" },
      { url: "fluesterpost_4_wireframe.png", label: "wireframe" },
    ],
    contentChunks: [
      {
        label: "Description",
        type: "text",
        content: `(more description coming soon) got to engage my passion for human languages. look at this design! look at these funny examples!`,
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
      {
        url: "taxfix_1_taxml_workbench.png",
        label: "Symbolic tax logic editor",
      },
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
        – Take responsibility for maintenance of company-wide technical tools`,
      },
      {
        label: "Description",
        type: "text",
        content:
          "(more description coming soon) many apps! early days; new markets; TaxML Editor...",
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: [
          "React",
          "React Native",
          "node.js",
          "Firebase",
          "App Store",
          "Google Play Store",
          "TaxML symbolic tax markup language",
        ],
      },
    ],
  },
  {
    slug: "txtwerk",
    name: "TXTWerk",
    images: [
      {
        url: "txtwerk_1_keyword.png",
        label: "Keyword categorization",
      },
      {
        url: "txtwerk_2_sentiment_mobile.png",
        label: "Sentiment analysis (mobile)",
      },
    ],
    contentChunks: [
      {
        label: "Description",
        type: "text",
        content: `At Neofonie, I built this frontend app from scratch, to help sell an AI text analysis tool to potential clients. The internal brand Ontolux offers an API that analyzes any length of text (in German or English), with several different functions, including keyword categorization, general postive/negative sentiment, and disambiguation of key terms.

        While building this app, I refreshed my knowledge of modern Angular. I made extensive use of API integration. And I helped to refine conceptual designs into a highly functional demo, that fit into the existing style of other Ontolux experiences.

        Tech used: Angular 16.`,
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
    name: "Neofonie",
    images: [
      {
        url: "mycare_1_home.png",
        label: "mycare.de",
      },
      {
        url: "heyobi_1_home.png",
        label: "heyOBI",
      },
    ],
    contentChunks: [
      {
        label: "mycare.de",
        type: "text",
        content: `mycare.de is a long-standing health product marketplace. As one of my main clients at Neofonie, I assisted in many improvements of their full-featured webapp. I fixed bugs, improved loading speed, and helped launch new marketing campaigns. In light of the codebase being somewhat messy and out-of-date, I also helped to refactor and prune the code when possible.

        Tech used: Vue.js`,
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["Vue.js", "HTML", "CSS"],
      },
      {
        label: "heyOBI",
        type: "text",
        content: `Hardware seller OBI was another of my clients while at Neofonie. I helped the OBI developers to migrate to their new CMS leveraging GraphQL. In order to switch to the new CMS provider, my small team adapted their asset converter, so that it could be consumed by their various Backend-for-Frontend applications. Every possible variation of products, articles, suggestions, etc. needed special care.

        This required carefully updating the TypeScript types throughout the conversion service. This very detailed process gave me hands-on experience with a robust and intricate backend application of TypeScript.

        Once all tests showed precisely recreted experiences across all heyOBI user-facing apps, they new CMS service was adopted. Users noticed no difference, but the OBI content creators were able to use a newer system, with many new and improved metadata capabilities unlocked.`,
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["TypeScript"],
      },
    ],
  },
  {
    slug: "farklife",
    name: "Farklife",
    images: [
      {
        url: "farklife_1.png",
        label: "Counting up the dice",
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
    name: "Portfolio",
    images: [
      {
        url: "portfolio_1_home.png",
        label: "Home page",
      },
      {
        url: "portfolio_2_project_mobile.png",
        label: "Project page (mobile)",
      },
      {
        url: "portfolio_3_design_home.png",
        label: "design: Home page",
      },
      {
        url: "portfolio_4_design_project.png",
        label: "design: Project page",
      },
      {
        url: "portfolio_5_design_mobile.png",
        label: "design: mobile views",
      },
      {
        url: "portfolio_6_design_color_palette.png",
        label: "design: color palette",
      },
      {
        url: "portfolio_7_design_themes.png",
        label: "design: themes",
      },
    ],
    contentChunks: [
      {
        label: "Description",
        type: "text",
        content: `This site right here! It's my portfolio site, a place to share my projects and experiences.

        For now it's showcasing only software projects, but in the coming months, I plan to show off other kinds of projects (including original music, dj recordings, film score composition, theatre sound design, and improv comedy).

        If you like what you see, let's talk! I'm looking for work!`,
      },
      {
        label: "Challenges",
        type: "text",
        content: `One challenge I faced was figuring out how to import images dynamically. I built the copy and image content to be updated in JS objects, rendered conditionally. And that means importing images without static URIs.

        I accomplished this by using the enhanced:img SvelteKit syntax, which in turn leverages Vite's built-in asset handling. Which means that multiple image sizes are created on build, for a quicker, cleaner user experience.`,
      },
      {
        label: "Design",
        type: "text",
        content: `My friend Jana helped with the design of this site. We discussed my goals (mainly: getting a dev job), collected some inspirations, and looked at the personality of my existing projects.

        Check out Jana's work at janagramlich.com`,
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["Svelte", "SvelteKit", "GitHub Issues"],
      },
    ],
  },
];
