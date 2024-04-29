import { Icon } from "../Icon/Icon";
import { Clock } from "./Clock/Clock";
import styles from "./Navbar.module.css";
import { Tabs } from "./Tabs/Tabs";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.tabContainer}>
        <button className={styles.start}>
          <Icon icon="windowsLogo" />
          <p>Start</p>
        </button>
        <Tabs />
        <Clock />
      </div>
    </nav>
  );
};
