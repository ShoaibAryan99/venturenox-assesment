import { Box } from "@mui/material";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <>
      <Box>
        <ReactLoading
          type={"spinningBubbles"}
          color={"black"}
          height={48}
          width={48}
        />
        <Box className="msgStyle">Loading.....</Box>
      </Box>
    </>
  );
};
export default Loader;
