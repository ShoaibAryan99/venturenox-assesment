import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1E1B1B",
    },
    text: {
      primary: "#1E1B1B",
      secondary: "#FFFFFF",
      light: "#939191",
      paragraph: "#232536",
      featured: "#FF6433",
      grey: "#232536",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "Manrope",
    fontSize: 12,
    h1: {
      fontWeight: 800,
      fontSize: 64,
      lineHeight: "84px",
    },
    h4: {
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "56px",
    },
    h3: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "67.2px",
    },
    body1: {
      fontSize: 18,
      fontWeight:600,
      lineHeight: "31.5px",
    },
    body2: {
      fontSize: 16,
      lineHeight: "23px",
      color: "#232536",
    },
    subtitle1: {
      fontSize: 32,
      lineHeight: "48px",
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: "28px",
      color: "#939191",
    },
    h6: {
      fontWeight: 700,
      fontSize: 22,
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 480, md: 768, lg: 1920, xl: 1920 },
  },
});
