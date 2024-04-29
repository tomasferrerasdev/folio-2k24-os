import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Tomas Ferreras</h1>
      <p>Software developer</p>
      <div>
        <ul>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/experience"}>Experience</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
