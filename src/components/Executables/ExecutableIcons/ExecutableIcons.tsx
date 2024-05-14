import { useWindowStore } from "../../../store/windows-store";
import DosPlayer from "../../OperatingSystem/DOS/DosPlayer";
import { Icon } from "../../OperatingSystem/Icon/Icon";
import { MusicPlayer } from "../../OperatingSystem/MusicPlayer/MusicPlayer";
import { IWindow } from "../../OperatingSystem/OS/OS";
import { Portfolio } from "../../OperatingSystem/Portfolio/Portfolio";
import { GuestBook } from "../../OperatingSystem/ResumeViewer/GuestBook";
import styles from "./ExecutableIcons.module.css";

export const ExecutableIcons = () => {
  return (
    <div className={styles.executables}>
      <ExecutableIcon />
    </div>
  );
};

const ExecutableIcon = () => {
  const { addWindow, openWindows, toggleMinimizeWindow } = useWindowStore();

  const handleClick = (windowId: number, windowConfig: IWindow) => {
    const existingWindow = openWindows.find((window) => window.id === windowId);

    if (existingWindow && existingWindow.isMinimized) {
      toggleMinimizeWindow(windowId);
    } else {
      addWindow(windowConfig);
    }
  };
  return (
    <>
      <button
        className={styles.executable}
        onClick={() =>
          handleClick(2, {
            id: 2,
            windowTitle: "My Portfolio",
            windowBarColor: "#0000a3",
            windowBarIcon: "folio",
            children: <Portfolio />,
            isMinimized: false,
          })
        }
      >
        <figure>
          <Icon icon="folio" size={48} />
        </figure>
        <p>My Portfolio</p>
      </button>
      <button
        className={styles.executable}
        onClick={() => {
          handleClick(1, {
            id: 1,
            windowTitle: "Doom",
            windowBarColor: "#1C1C1C",
            windowBarIcon: "doom_icon",
            children: <DosPlayer bundleUrl="doom.jsdos" />,
            isMinimized: false,
          });
        }}
      >
        <figure>
          <Icon icon="doom_icon" size={48} />
        </figure>
        <p>Doom</p>
      </button>
      <button
        className={styles.executable}
        onClick={() => {
          handleClick(4, {
            id: 4,
            windowTitle: "Music Player",
            windowBarColor: "#0000aa",
            windowBarIcon: "music",
            children: <MusicPlayer />,
            width: 600,
            height: 900,
            isMinimized: false,
          });
        }}
      >
        <figure>
          <Icon icon="music" size={48} />
        </figure>
        <p>Music Player</p>
      </button>
    </>
  );
};
