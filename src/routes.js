import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog/index";
import About from "./pages/about/index";
import Courses from "./pages/courses/index";
import Contact from "./pages/contact/index";

export default function Routas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
