// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Experience from "./Pages/Experiences/Experiences";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import ExperienceDetails from "./Pages/ExperienceDetails/ExperienceDetails";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/experience/:slug" element={<ExperienceDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
