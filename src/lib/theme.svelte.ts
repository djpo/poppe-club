type Theme = {
  id: number;
  name: string;
  bg: string;
  text: string;
  bubbleBg: string;
  bubbleText: string;
};

export const themes: Theme[] = [
  {
    id: 0,
    name: "white",
    bg: "--color-white",
    text: "--color-black",
    bubbleBg: "--color-lightgreen-2",
    bubbleText: "--color-black",
  },
  {
    id: 1,
    name: "black",
    bg: "--color-lightblack",
    text: "--color-white",
    bubbleBg: "--color-white",
    bubbleText: "--color-black",
  },
  {
    id: 2,
    name: "fuchsia",
    bg: "--color-fuchsia",
    text: "--color-black",
    bubbleBg: "--color-lightpink-2",
    bubbleText: "--color-black",
  },
  {
    id: 3,
    name: "seafoam",
    bg: "--color-lightgreen-1",
    text: "--color-black",
    bubbleBg: "--color-mint",
    bubbleText: "--color-black",
  },
  {
    id: 4,
    name: "orange",
    bg: "--color-orange",
    text: "--color-black",
    bubbleBg: "--color-white",
    bubbleText: "--color-black",
  },
  {
    id: 5,
    name: "teal",
    bg: "--color-teal",
    text: "--color-black",
    bubbleBg: "--color-white",
    bubbleText: "--color-black",
  },
  {
    id: 6,
    name: "pink",
    bg: "--color-lightpink-1",
    text: "--color-black",
    bubbleBg: "--color-lightblue",
    bubbleText: "--color-black",
  },
];

export const themeState = $state({
  themeId: 0,
});

export function cycleTheme() {
  if (themeState.themeId + 1 < themes.length) {
    themeState.themeId += 1;
  } else {
    themeState.themeId = 0;
  }
}
