"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#e60023",
        },
        secondary: {
            main: "#1976d2",
        },
        background: {
            default: "#ffffffff",
        },
    },
    typography: {
        fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg",
            },
        },
    },
});

export default theme;
