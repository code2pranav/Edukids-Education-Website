import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import ScrollToTop from "@components/common/ScrollToTop";
import { useAOS } from "@hooks/useAOS";

import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Team from "@pages/team/Team";
import TeamDetails from "@pages/team/TeamDetails";
import Event from "@pages/event/Event";
import EventDetails from "@pages/event/EventDetails";
import Course from "@pages/courses/Course";
import CourseDetails from "@pages/courses/CourseDetails";
import Blog from "@pages/blog/Blog";
import BlogDetails from "@pages/blog/BlogDetails";
import Pricing from "@pages/pricing/Pricing";
import Contact from "@pages/contact/Contact";

const App = () => {
  // Single AOS init for the whole app — never call AOS.init() elsewhere.
  useAOS();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamDetails />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
