import { Box, styled } from "@mui/material";

export const BlogBannerListParent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap ",
  maxWidth: 1280,
  padding: `${theme.spacing(6)} 0`,
  margin: "auto",
  marginTop: theme.spacing(5),
  gap: theme.spacing(4),
  marginBottom: theme.spacing(10),
  //   padding:theme.spacing(8)
}));
