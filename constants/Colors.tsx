/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#00BFA5";
const tintColorDark = "#ffffff";

export const Colors = {
  light: {
    text: "#00BFA5",
    background: "#fff",
    tint: tintColorLight,
    icon: "#00BFA5",
    tabIconDefault: "#00BFA5",
    tabIconSelected: tintColorLight,
    borderColor: tintColorLight,
  },
  dark: {
    text: "#ffffff",
    background: "#00BFA5",
    tint: tintColorDark,
    icon: "#ffffff",
    tabIconDefault: "#ffffff",
    tabIconSelected: tintColorDark,
    borderColor: tintColorDark,
  },
};
