import { common } from "@mui/material/colors";

const colorTokens = {
   lightMode: {
    Text: "#000000", //black
    Background: "#d5f7fc",//light blue
    Primary: "#06b3f8", //sky blue
    Secondary: "#fcfcfc", // white
    Accent: "#efcd0c", //yellow
   },
   darkMode: {
    Text: "#d5f7fc", //light blue
    Background: "#000000", // black
    Primary: "#06b3f8", // sky blue
    Secondary: "#303030", // dark grey
    Accent: "#faec9a", // light yellow
   }
}

type Mode = "light" | "dark";

export const createPalette = (mode: Mode) => {
    const selectedMode = mode === "dark" ? colorTokens.darkMode : colorTokens.lightMode;

    return {
        common: {
            black: common.black,
            white: common.white,
        },
        primary: {
            main: selectedMode.Primary,
        },
        secondary: {
            main: selectedMode.Secondary,
        },
        text: {
            primary: selectedMode.Text,
            secondary: selectedMode.Accent,
        },
        background: {
            default: selectedMode.Background,
            paper: selectedMode.Secondary,
        },
        // ... add other palette properties if needed
    };
};