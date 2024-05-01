import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTitle}>
        <h1>Tomas</h1>
        <h1>Ferreras</h1>
        <p>Portfolio '24</p>
      </div>
      <div className={styles.sidebarLinks}>
        <Link to="/about">
          <div>
            <h4>About</h4>
          </div>
        </Link>
        <Link to="/experience">
          <div>
            <h4>Experience</h4>
          </div>
        </Link>
        <Link to="/projects">
          <div>
            <h4>Projects</h4>
          </div>
        </Link>
        <Link to="/contact">
          <div>
            <h4>Contact</h4>
          </div>
        </Link>
      </div>
    </aside>
  );
};
