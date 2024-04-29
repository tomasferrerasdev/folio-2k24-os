import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./Portfolio.module.css";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Projects } from "./Projects/Projects";
import { Experience } from "./Experience/Experience";
import { Contact } from "./Contact/Contact";
import { Route, Routes } from "react-router-dom";

export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
