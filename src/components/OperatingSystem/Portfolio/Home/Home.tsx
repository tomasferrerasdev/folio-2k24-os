import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Tomas Ferreras</h1>
      <p>Software developer</p>
      <div>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
