import styles from "./Resume.module.css";
import printer from "./resume/printer.gif";

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <img src={printer} alt="" />
      <div className={styles.resumeLink}>
        <h3>Looking for my resume?</h3>
        <a href="/Tomas-Ferreras-Resume.pdf" download="tomas_ferreras_resume">
          Click here to download it!
        </a>
      </div>
    </div>
  );
};
