import { Route, Routes } from "react-router-dom";
import TablesParent from "../pages/tables";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TablesParent />} />
    </Routes>
  );
};

export default Routing;
