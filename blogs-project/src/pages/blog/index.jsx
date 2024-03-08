/* eslint-disable no-prototype-builtins */
import { useDispatch, useSelector } from "react-redux";
import { BlogDetails } from "../../components";
import { LoaderStyles } from "../../utils/muiStyles/loaderStyles";
import Loader from "../../components/loader/Loader";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { singleBlogAction } from "../../store/actions";
import { useParams } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  const { loading, singleResult, error, blogView } = useSelector(
    (state) => state.blogsReducer
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(singleBlogAction(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <LoaderStyles>
          <Loader />
        </LoaderStyles>
      ) : (
        <>
          {error ? (
            <Typography
              variant="h6"
              color="error"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "140px",
              }}
            >
              An error occurred: {error}
            </Typography>
          ) : (
            <BlogDetails
              blogData={singleResult}
              blogView={blogView?.hasOwnProperty(id) ? blogView[id] : 0}
            />
          )}
        </>
      )}
    </>
  );
};

export default Blog;
