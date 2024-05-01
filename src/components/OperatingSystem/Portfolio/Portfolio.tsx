import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./Portfolio.module.css";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";
import { Experience } from "./Experience/Experience";
import { Contact } from "./Contact/Contact";
import { Outlet, Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound/NotFound";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
