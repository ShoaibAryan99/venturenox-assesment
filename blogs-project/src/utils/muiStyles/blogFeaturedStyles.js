import { Box, styled } from "@mui/material";

export const BlogFeatureParent = styled(Box)(({ theme}) => ({
  display: "flex",
  flexWrap: "wrap ",
  maxWidth: 1280,
  margin: "auto",
  padding:`${theme.spacing(6)} 0`,
  gap: theme.spacing(4),
}));
