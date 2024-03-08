import { Box } from "@mui/material";
import notFoundImg from "../../assets/404.png"

const PageNotFound = () => {
  return (
    <Box sx={{width:1280, margin:"auto", padding:14}}>
      <Box component="img" src={notFoundImg} width={896} height={598} />
    </Box>
  );
};

export default PageNotFound;