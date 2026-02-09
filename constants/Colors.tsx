/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#9A6D38";
const tintColorDark = "#ffffff";

export const Colors = {
  light: {
    text: "#9A6D38",
    background: "#fff",
    tint: tintColorLight,
    icon: "#9A6D38",
    tabIconDefault: "#9A6D38",
    tabIconSelected: tintColorLight,
    borderColor: tintColorLight,
  },
  dark: {
    text: "#ffffff",
    background: "#9A6D38",
    tint: tintColorDark,
    icon: "#ffffff",
    tabIconDefault: "#ffffff",
    tabIconSelected: tintColorDark,
    borderColor: tintColorDark,
  },
};
