import {  Typography } from "@mui/material";
import { BlogBannerParent,BlogBannerChild } from "../../utils/muiStyles";

const BlogBanner = () => {
  return (
    <BlogBannerParent>
      <BlogBannerChild>
        <Typography variant="h1">Our Blogs</Typography>
      </BlogBannerChild>
      <BlogBannerChild>
        <Typography  variant="h4">
          Diagnose Car Problems If You Don’t Know Much About Cars
        </Typography>
        <Typography variant="body1">
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes, We provide a
          full range of front end mechanical.
        </Typography>
      </BlogBannerChild>
    </BlogBannerParent>
  );
};

export default BlogBanner;
