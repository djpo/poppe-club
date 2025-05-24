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
        label: "Try it out!",
        type: "liveLink",
        content: "https://fluesterpost.poppe.club",
      },
      {
        label: "On GitHub",
        type: "githubLink",
        content: "https://github.com/djpo/fluesterpost",
      },
      {
        label: "Description",
        type: "text",
        content: `
          I built this app inspired by the game 'telephone' (or "Flüsterpost" in German). Send text through a cycle of translations through multiple languages. See how it's changed when it returns to the origin language! Try it out at the link above!
          <br /><br />
          I started this project in 2022 to practice my React skills, and to build an app around a topic I enjoy: human languages. It started as a React app with Redux and Sagas, and I recently (2025) have migrated it to Next.js (and eschewed Redux and Sagas).
          <br /><br />
          The user first enters text to translate, then determines a customizable cycle (of any length) of languages. Then the app will automatically translates the text through each step of the cycle using Google Translate API. The user watches this process unfold until it ends with a final translation back into the original language, providing an often different and fun result.
          <br /><br />
          I'm working on this app presently (May 2025). Next steps include: restyling (especially for mobile); allowing the user to save their translatio cycles; displaying a page of others' saved cycles.
          <br /><br />
          The below images capture highlight some fun examples of translation cycles.
        `,
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: [
          "Next.js",
          "React",
          "Google Translate API",
          "Redux",
          "Sagas",
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
        content: `
          – Create, improve, and bugfix mature consumer apps using React Native and React
          <br />
          – Lead rapid implementation of new features and user experiences
          <br />
          – Contribute to the growth and stability of core mobile and web apps in multiple markets (first versions in Italy and France)
          <br />
          – Collaborate with other internal departments and multiple stakeholders
          <br />
          – Take responsibility for maintenance of company-wide technical tools
        `,
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
        content: `
          At Neofonie, I built this frontend app from scratch, to help sell an AI text analysis tool to potential clients. The internal brand Ontolux offers an API that analyzes any length of text (in German or English), with several different functions, including keyword categorization, general postive/negative sentiment, and disambiguation of key terms.
          <br /><br />
          While building this app, I refreshed my knowledge of modern Angular. I made extensive use of API integration. And I helped to refine conceptual designs into a highly functional demo, that fit into the existing style of other Ontolux experiences.
          <br /><br />
          Tech used: Angular 16.
        `,
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
        content: `
          mycare.de is a long-standing health product marketplace. As one of my main clients at Neofonie, I assisted in many improvements of their full-featured webapp. I fixed bugs, improved loading speed, and helped launch new marketing campaigns. In light of the codebase being somewhat messy and out-of-date, I also helped to refactor and prune the code when possible.
          <br /><br />
          Tech used: Vue.js
        `,
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["Vue.js", "HTML", "CSS"],
      },
      {
        label: "heyOBI",
        type: "text",
        content: `
          Hardware seller OBI was another of my clients while at Neofonie. I helped the OBI developers to migrate to their new CMS leveraging GraphQL. In order to switch to the new CMS provider, my small team adapted their asset converter, so that it could be consumed by their various Backend-for-Frontend applications. Every possible variation of products, articles, suggestions, etc. needed special care.
          <br /><br />
          This required carefully updating the TypeScript types throughout the conversion service. This very detailed process gave me hands-on experience with a robust and intricate backend application of TypeScript.
          <br /><br />
          Once all tests showed precisely recreted experiences across all heyOBI user-facing apps, they new CMS service was adopted. Users noticed no difference, but the OBI content creators were able to use a newer system, with many new and improved metadata capabilities unlocked.
        `,
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
        label: "GitHub repo",
        type: "githubLink",
        content: "https://github.com/djpo/farklife",
      },
      {
        label: "Description",
        type: "text",
        content: `
          This is a small project to practice my React skills.
          <br /><br />
          I like the real-life dice game called Farkle, so it was fun to build it virtually!
        `,
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
        label: "GitHub repo",
        type: "githubLink",
        content: "https://github.com/djpo/poppe-club",
      },
      {
        label: "Description",
        type: "text",
        content: `
          This site right here! It's my portfolio site, a place to share my projects and experiences.
          <br /><br />
          For now it's showcasing only software projects, but in the coming months, I plan to show off other kinds of projects (including original music, dj recordings, film score composition, theatre sound design, and improv comedy).
          <br /><br />
          If you like what you see, let's talk! I'm looking for work!
        `,
      },
      {
        label: "Challenges",
        type: "text",
        content: `
          One challenge I faced was figuring out how to import images dynamically. I built the copy and image content to be updated in JS objects, rendered conditionally. And that means importing images without static URIs.
          <br /><br />
          I accomplished this by using the enhanced:img SvelteKit syntax, which in turn leverages Vite's built-in asset handling. Which means that multiple image sizes are created on build, for a quicker, cleaner user experience.
        `,
      },
      {
        label: "Design",
        type: "text",
        content: `
          My friend Jana helped with the design of this site. We discussed my goals (mainly: getting a dev job), collected some inspirations, and looked at the personality of my existing projects.
          <br /><br />
          Check out Jana's work at janagramlich.com
        `,
      },
      {
        label: "Skills employed",
        type: "bubbleList",
        content: ["Svelte", "SvelteKit", "GitHub Issues"],
      },
    ],
  },
];
