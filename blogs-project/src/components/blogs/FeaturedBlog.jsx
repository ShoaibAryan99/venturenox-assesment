/* eslint-disable no-prototype-builtins */
import { Box } from "@mui/material";
import { BlogFeatureParent } from "../../utils/muiStyles";
import CardComponent from "../shared/card";
const FeaturedBlog = ({ singleBlogData, blogView, onClick }) => {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5" }}>
      <BlogFeatureParent>
        <CardComponent
          flexDirection="row"
          feature={true}
          blogData={singleBlogData}
          blogView={
            blogView?.hasOwnProperty(singleBlogData?.id)
              ? blogView[singleBlogData?.id]
              : 0
          }
          onClick={onClick}
        />
      </BlogFeatureParent>
    </Box>
  );
};

export default FeaturedBlog;
