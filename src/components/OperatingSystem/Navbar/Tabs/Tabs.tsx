import { useState } from "react";
import { Icon, IconName } from "../../Icon/Icon";
import styles from "./Tabs.module.css";
import { useWindowStore } from "../../../../store/windows-store";

export const Tabs = () => {
  const { openWindows, activeWindow, setActiveWindow } = useWindowStore();

  return (
    <div className={styles.tabs}>
      {openWindows &&
        openWindows.length > 0 &&
        openWindows.map(({ id, windowBarIcon, windowTitle }) => (
          <div
            key={id}
            className={`${styles.tabContainer} ${
              activeWindow === id ? styles.active : ""
            }`}
          >
            <button
              className={`${styles.tab}`}
              onClick={() => setActiveWindow(id)}
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
