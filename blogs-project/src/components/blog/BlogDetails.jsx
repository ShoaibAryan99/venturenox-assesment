import { Box, Typography } from "@mui/material";
// import {Divider} from "@mui/material";
import { SingleBlogStyle, ImgStyle } from "../../utils/muiStyles";
import eyeIMg from "../../assets/Eye.svg";
import carImg from "../../assets/carimg.jpeg";
// import roadImg from "../../assets/road.jpeg";

//NOTE:  As I am getting only one article from API response so I have binded the data accordingly, as per figma design there are more than 1 articles so I have commented the code for static data if you wanna test the design you can uncomment the code and can see the design according to figma

const BlogDetails = ({ blogData, blogView }) => {
  return (
    <>
      <SingleBlogStyle>
        <Box>
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            textAlign="center"
            mb={1.5}
          >
            <Typography color={"text.light"} variant="body2" gutterBottom>
              Posted on October 6th 2021
            </Typography>
            <Typography
              color={"text.light"}
              variant="body2"
              textAlign="center"
              gutterBottom
            >
              <Box
                component="img"
                src={eyeIMg}
                position="relative"
                top="1px"
                right="3px"
              />
              {blogView} views
            </Typography>
          </Box>
          <Box sx={{ width: "80%" }}>
            <Typography variant="h3" sx={{ textWrap: "pretty" }}>
              {blogData?.Title}
            </Typography>
            <Typography variant="subtitle2">{blogData?.Subtitle}</Typography>
          </Box>
        </Box>

        <ImgStyle
          component="img"
          src={carImg}
          sx={{ transform: "scale(1.1)" }}
        ></ImgStyle>
        <Typography variant="h4">This is a blog post headline</Typography>
        <Typography variant="subtitle2" sx={{ mt: 4, width: "896px" }}>
          {blogData?.Article}
          {/* <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </Typography> */}
        </Typography>
        {/* <Box
          component="img"
          src={roadImg}
          width={896}
          height={598}
          mb={2}
          mt={6}
        />
        <Box sx={{ width: 896 }}>
          <Typography variant="subtitle1" mt={2}>
            This is a small blog post headline
          </Typography>
          <Typography variant="subtitle2" mb={2} mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Divider
              sx={{
                height: "112px",
                width: "3.2px",
                backgroundColor: "#1E1B1B",
              }}
              orientation="vertical"
            />
            <Typography variant="subtitle2" mt={2} ml={2}>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
            </Typography>
          </Box>
          <Typography variant="subtitle2" mt={2} mb={2}>
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </Typography>
        </Box> */}
      </SingleBlogStyle>
    </>
  );
};

export default BlogDetails;
