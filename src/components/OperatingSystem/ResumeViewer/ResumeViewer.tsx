import { Resume } from "../Portfolio/Resume/Resume";
import styles from "./ResumeViewer.module.css";
export const ResumeViewer = () => {
  return (
    <div className={styles.resumeViewerContainer}>
      <div className={styles.resumeContainer}>
        <Resume />
      </div>
      <img className={styles.resumeViewerImage} src="/resume.svg"></img>
    </div>
  );
};
