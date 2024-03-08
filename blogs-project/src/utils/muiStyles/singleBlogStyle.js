import { Box,styled } from "@mui/material";
import { theme } from "../theme";

export const SingleBlogStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap ",
  maxWidth: 1280,
  margin: "auto",
  padding: `${theme.spacing(15)}`,
}));
export const ImgStyle = styled(Box)(() => ({
  flexWrap: "wrap ",
  width: 1280,
  margin:`${theme.spacing(10)}`,
  backgroundPosition: "center",
  backgroundSize: 700,
  backgroundRepeat: "no-repeat",
  height: 512,
  objectFit: "cover",
}));

