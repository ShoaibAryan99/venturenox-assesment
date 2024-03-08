/* eslint-disable no-prototype-builtins */
import { useState } from "react";
import CardComponent from "../shared/card";
import { BlogBannerListParent } from "../../utils/muiStyles";
import { Box, Button } from "@mui/material";

const BlogsList = ({ blogsData, blogView, onClick }) => {
  const [page, setPage] = useState(1);
  const blogsPerPage = 6;

  const visibleBlogs = blogsData?.slice(0, page * blogsPerPage);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };


  return (
    <>
      <Box mb={14}>
        <BlogBannerListParent>
          {visibleBlogs?.map((blogData) => (
            <CardComponent
              key={blogData?.id}
              blogData={blogData}
              blogView={blogView?.hasOwnProperty(blogData.id) ? blogView[blogData.id] : 0 }
              onClick={onClick}
            />
          ))}
        </BlogBannerListParent>
        {visibleBlogs?.length < blogsData?.length && (
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Load More
          </Button>
        )}
      </Box>
    </>
  );
};

export default BlogsList;
