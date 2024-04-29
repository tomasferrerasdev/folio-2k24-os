import { Resume } from "../Resume/Resume";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceContent}>
        <div className={styles.experienceTitle}>
          <div className={styles.title}>
            <h1>Tuxdi</h1>
            <a href="https://tuxdi.com/">https://tuxdi.com/</a>
          </div>
          <div className={styles.subtitle}>
            <h3>Frontend Developer</h3>
            <p>Feb 2023 - Mar 2024</p>
          </div>
        </div>
        <div className="text-block">
          <p>
            Worked as a Frontend Developer, where I developed several web apps
            from scratch that are now still in production. I've worked in
            several buisiness such as ticket sales and distribution, digital
            newspapers and media, promo campaigns, administation applications,
            etc.
          </p>
          <br />
          <ul>
            <li>
              <p>
                Bring UX/UI team designs to life by developing high-quality
                code.
              </p>
            </li>
            <li>
              <p>
                Develop user-friendly and accesible frontend interfaces for
                software applications.
              </p>
            </li>
            <li>
              <p>SEO improvement</p>
            </li>
            <li>
              <p>
                Interacted directly with clients to understand their
                requirements and feedback
              </p>
            </li>
            <li>
              <p>
                Conducted interviews with potential candidates to assess their
                suitability for frontend development roles.
              </p>
            </li>
            <li>
              <p>
                Facilitated a masterclass on frontend animations and emerging
                trends.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.experienceTitle}>
          <div className={styles.title}>
            <h1>Your company</h1>
            <a href="#">your incredible site</a>
          </div>
          <div className={styles.subtitle}>
            <h3>Frontend or backend or both</h3>
            <p>Available right now</p>
          </div>
        </div>
        <div className="text-block">
          <p>Some text. TODO</p>
          <Resume />
        </div>
        <br />
      </div>
    </div>
  );
};
