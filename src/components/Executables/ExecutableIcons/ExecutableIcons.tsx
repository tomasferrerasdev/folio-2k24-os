import { useWindowStore } from "../../../store/windows-store";
import DosPlayer from "../../OperatingSystem/DOS/DosPlayer";
import { Icon } from "../../OperatingSystem/Icon/Icon";
import { MusicPlayer } from "../../OperatingSystem/MusicPlayer/MusicPlayer";
import { Portfolio } from "../../OperatingSystem/Portfolio/Portfolio";
import { ResumeViewer } from "../../OperatingSystem/ResumeViewer/ResumeViewer";
import styles from "./ExecutableIcons.module.css";

export const ExecutableIcons = () => {
  return (
    <div className={styles.executables}>
      <ExecutableIcon />
    </div>
  );
};

const ExecutableIcon = () => {
  const { addWindow } = useWindowStore();

  return (
    <>
      <button
        className={styles.executable}
        onClick={() =>
          addWindow({
            id: 2,
            windowTitle: "My Portfolio",
            windowBarColor: "#0000a3",
            windowBarIcon: "explorer",
            children: <Portfolio />,
          })
        }
      >
        <figure>
          <Icon icon="portfolio" size={48} />
        </figure>
        <p>My Portfolio</p>
      </button>
      <button
        className={styles.executable}
        onClick={() => {
          addWindow({
            id: 1,
            windowTitle: "Doom",
            windowBarColor: "#1C1C1C",
            windowBarIcon: "doom_icon",
            children: <DosPlayer bundleUrl="doom.jsdos" />,
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
          addWindow({
            id: 3,
            windowTitle: "Resume",
            windowBarColor: "#0000aa",
            windowBarIcon: "resume",
            children: <ResumeViewer />,
          });
        }}
      >
        <figure>
          <Icon icon="resume" size={48} />
        </figure>
        <p>Resume</p>
      </button>
      <button
        className={styles.executable}
        onClick={() => {
          addWindow({
            id: 4,
            windowTitle: "Music Player",
            windowBarColor: "#0000aa",
            windowBarIcon: "music",
            children: <MusicPlayer />,
            width: 600,
            height: 800,
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
