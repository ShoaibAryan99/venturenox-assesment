import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";

import eyeIMg from "../../../assets/Eye.svg";
import cardImg from "../../../assets/cardimg.jpeg";
import { Card } from "../../../components/shared/card/style";
import Arrow from "../../../assets/Arrow.svg";

const CardComponent = ({
  flexDirection,
  feature,
  blogData,
  blogView,
  onClick,
}) => {
  return (
    <Card
      flexDirection={flexDirection}
      onClick={() => {
        flexDirection !== "row" && onClick(blogData?.id);
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            width: flexDirection == "row" ? 352.06 : 405,
            height: flexDirection == "row" ? 330 : 266,
          }}
          component="img"
          src={cardImg}
          // src="http://placeimg.com/640/480/nature"
          // src={`${blogData?.Image}`}
          alt="blog image"
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent={
              flexDirection == "row" ? "flex-start" : "space-between"
            }
            gap={flexDirection == "row" ? 2 : 0}
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
              {`${blogView} views`}
            </Typography>
            {feature && (
              <Box ml="auto" component="span">
                <Typography color="text.featured" sx={{ letterSpacing: 3 }}>
                  FEATURED
                </Typography>
              </Box>
            )}
          </Box>
          <Typography variant="subtitle1">{blogData?.Title}</Typography>

          <Typography variant={flexDirection == "row" ? "subtitle2" : "body2"}>
            {blogData?.Subtitle}
          </Typography>
          {flexDirection == "row" && (
            <Button
              onClick={() => {
                onClick(blogData?.id);
              }}
              sx={{ marginTop: 8 }}
              endIcon={<Box component="img" src={Arrow} />}
            >
              Read more
            </Button>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
