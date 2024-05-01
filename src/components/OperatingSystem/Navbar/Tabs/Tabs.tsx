import { Icon } from "../../Icon/Icon";
import styles from "./Tabs.module.css";
import { useWindowStore } from "../../../../store/windows-store";

export const Tabs = () => {
  const { openWindows, activeWindow, setActiveWindow, toggleMinimizeWindow } =
    useWindowStore();

  return (
    <div className={styles.tabs}>
      {openWindows &&
        openWindows.length > 0 &&
        openWindows.map(({ id, windowBarIcon, windowTitle, isMinimized }) => (
          <div
            key={id}
            className={`${styles.tabContainer} ${
              activeWindow === id && !isMinimized ? styles.active : ""
            }`}
          >
            <button
              className={`${styles.tab}`}
              onClick={() => {
                toggleMinimizeWindow(id);
                setActiveWindow(id);
              }}
            >
              <Icon icon={windowBarIcon} />
              <p>{windowTitle}</p>
            </button>
          </div>
        ))}
    </div>
  );
};

// <div className={`${styles.tabContainer} ${isActive ? styles.active : ""}`}>
