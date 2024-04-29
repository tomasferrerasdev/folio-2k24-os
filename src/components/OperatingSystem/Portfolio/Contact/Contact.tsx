import { Icon } from "../../Icon/Icon";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContent}>
        <div className={styles.contactTitle}>
          <div className={styles.title}>
            <h1>Contact</h1>
            <div className={styles.socials}>
              <div className={styles.social}>
                <Icon icon="github" size={36} />
              </div>
              <div className={styles.social}>
                <Icon icon="linkedin" size={36} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-block">
          <p>
            I am currently employed, however if you have any opportunities, feel
            free to reach out - I would love to chat! You can reach me via my
            personal email, or fill out the form below!
          </p>
          <br />
          <p>
            <b>Email: </b>
            <a href="mailto:hellotomasdev@gmail.com">hellotomasdev@gmail.com</a>
          </p>
          <br />
          <form>
            <label htmlFor="name">
              <p>
                <span>*</span>
                <b>Your name:</b>
              </p>
            </label>
            <input type="text" placeholder="Name" id="name" required />
            <label htmlFor="email">
              <p>
                <span>*</span>
                <b>Email:</b>
              </p>
            </label>
            <input type="email" placeholder="Email" id="email" required />
            <label htmlFor="company">
              <p>
                <b>Your company (optional):</b>
              </p>
            </label>
            <input type="text" placeholder="Company" id="company" />
            <label htmlFor="message">
              <p>
                <span>*</span>
                <b>Message</b>
              </p>
            </label>
            <textarea placeholder="Message" id="message" />
            <div className={styles.formButton}>
              <button disabled>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
