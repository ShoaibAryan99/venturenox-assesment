import { Box, styled } from "@mui/material";

import backgroundImage from "../../assets/headerimg.png";

export const BlogBannerParent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap:"wrap ",
  "& div:nth-of-type(1)": {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${backgroundImage})`,
    backgroundSize: 2000,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    "& h1": {
      textAlign: "center",
    },
  },
}));
export const BlogBannerChild = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  height: 624,
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  flex:"1 1 400px",

 
  color: theme.palette.text.secondary,
  textWrap: "balance",
  padding: theme.spacing(8),
}));
