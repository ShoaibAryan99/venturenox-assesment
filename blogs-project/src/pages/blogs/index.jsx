import { Box, Typography } from "@mui/material";
import { BlogBanner, BlogList, FeaturedBlog } from "../../components";
import { blogsAction } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../../components/loader/Loader";
import { LoaderStyles } from "../../utils/muiStyles/loaderStyles";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = (id) => {
    navigate(`/details/${id}`);
  };
  const { loading, data, error, blogView } = useSelector(
    (state) => state.blogsReducer
  );

  useEffect(() => {
    dispatch(blogsAction());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoaderStyles>
          <Loader />
        </LoaderStyles>
      ) : (
        <Box>
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
            <>
              <BlogBanner />
              <FeaturedBlog
                singleBlogData={data?.[0]}
                blogView={blogView}
                onClick={onClickHandler}
              />
              <BlogList
                blogsData={data?.slice(0)}
                blogView={blogView}
                onClick={onClickHandler}
              />
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default Blogs;
