import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from "./create-palette";
import { createTypography } from "./create-typography";

type Mode = "light" | "dark";
export const createThemeSettings = (mode:Mode) => {
    const palette = createPalette(mode);
    const typography = createTypography();

    return createMuiTheme({
        breakpoints:{
            values:{
                xs:0,
                sm:600,
                md:900,
                lg:1200,
                xl:1440
            }
        },
        palette,
        typography
    });
}