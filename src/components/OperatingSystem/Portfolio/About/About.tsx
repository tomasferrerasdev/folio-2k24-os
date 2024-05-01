import { Link } from "react-router-dom";
import { Resume } from "../Resume/Resume";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTitle}>
          <h1>Welcome</h1>
          <h3>I'm Tomas Ferreras</h3>
        </div>
        <div className={styles.textBlock}>
          <p>
            I'm a software developer with over a year of professional
            experience, mostly focused on React, Next.js, TypeScript, and
            Node.js.
          </p>
        </div>
        <Resume />
        <div className={styles.textBlock}>
          <h3>About me</h3>
          <br />
          <p>
            From a young age, I have had a curiosity about how things worked.
            This naturally led me to become absolutely obsessed with software
            since I was in love with videogames. In elementary school, I joined
            computing orientation in which I had my first real exposure to
            programming. In 2020 I started my career as a software developer in
            university, where I learned the basics of web development and
            started to work on my first projects.
          </p>
          <br />
          <div className="captioned-image">
            <img src="/images/me.jpeg" alt="" />
            <p>
              <sub>
                <b>Figure 1:</b>A real photo of me surfing the web in 2005.
              </sub>
            </p>
          </div>
          <br />
          <p>
            Now I'm putting my efforts into learning new technologies such as 3D
            in the web, as you probably noticed in this website.
          </p>
          <p>
            You can check all the other projects that I've made here following
            the next link: <Link to="/projects">projects</Link>
          </p>
          <br />
          <div className="captioned-image">
            <img src="/images/me_oldie.jpg" alt="" />
            <p>
              <sub>
                <b>Figure 2:</b>Me after a couple years from the previous photo.
              </sub>
            </p>
          </div>
        </div>
        <div className={styles.textBlock}>
          <p className={styles.lastChild}>
            If you have any question, comment or just want to contact me I would
            love to hear it. You can reach me through the{" "}
            <Link to="/contact">contact page</Link> or shoot me an email at{" "}
            <a href="mailto:hellotomasdev@gmail.com">hellotomasdev@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};
