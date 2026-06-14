export type BubbleList = string[];

export type ContentChunk = {
  label: string;
  type: "text" | "bubbleList" | "githubLink" | "liveLink";
  content: string | BubbleList;
};

const skills: BubbleList = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Angular",
  "Vue.js",
  "Svelte",
  "HTML",
  "CSS",
  "English",
  "German",
];

export const devContent: ContentChunk[] = [
  {
    label: "experience",
    type: "text",
    content:
      "6 years of experience building web and mobile apps, at agencies, startups, and mid-size businesses. specializing in JavaScript and frontend frameworks including React, Angular, Vue, and Svelte.",
  },
  {
    label: "skills",
    type: "bubbleList",
    content: skills,
  },
];
