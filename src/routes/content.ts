export type BubbleList = string[];

export type ContentChunk = {
  label: string;
  type: "text" | "bubbleList";
  content: string | BubbleList;
};

const skills: BubbleList = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Angular",
  "Vue",
  "Svelte",
  "HTML",
  "CSS",
  "English",
  "German",
];

export const homeContent: ContentChunk[] = [
  {
    label: "Experience",
    type: "text",
    content:
      "6 years of experience in frontend development. Diverse environments including agencies, startups, and mid-size businesses.",
  },
  {
    label: "Skills",
    type: "bubbleList",
    content: skills,
  },
];
