import { Routes, Route } from "react-router-dom";
import { Blog, Blogs, PageNotFound } from "../pages";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/details/:id" element={<Blog />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
