import { styled, Box } from "@mui/material";

export const Card = styled(Box)(({ theme, flexDirection }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.default,
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap ",
  "& .MuiButtonBase-root": {
    display: "flex",
    flexDirection: flexDirection || "column",
  },
  maxWidth: flexDirection == "row" ? "100%" : 405,
  height:"100%",
  padding: flexDirection == "row" ? theme.spacing(5) : 0,

}));
