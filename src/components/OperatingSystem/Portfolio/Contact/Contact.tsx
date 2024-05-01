import { SubmitHandler, useForm } from "react-hook-form";
import { Icon } from "../../Icon/Icon";
import styles from "./Contact.module.css";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ message: "", status: "" });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const res = await fetch("https://folio2k24-node.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setResponse({
        message: "Message sent! I will get back to you as soon as possible.",
        status: "success",
      });
    } else {
      setResponse({
        message:
          "An error occurred, please try again later. Or leave a message on <a href='https://www.linkedin.com/in/tomasferreras/'target='_blank'>LinkedIn</a>",
        status: "error",
      });
    }
    setLoading(false);
    setTimeout(() => {
      setResponse({
        message: "",
        status: "",
      });
    }, 8000);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactContent}>
        <div className={styles.contactTitle}>
          <div className={styles.title}>
            <h1>Contact</h1>
            <div className={styles.socials}>
              <div className={styles.social}>
                <a href="https://github.com/tomasferrerasdev" target="_blank">
                  <Icon icon="github" size={36} />
                </a>
              </div>
              <div className={styles.social}>
                <a
                  href="https://www.linkedin.com/in/tomasferreras/"
                  target="_blank"
                >
                  <Icon icon="linkedin" size={36} />
                </a>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
              <p>
                <span>*</span>
                <b>Your name:</b>
              </p>
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              {...register("name", {
                required: true,
              })}
            />
            <label htmlFor="email">
              <p>
                <span>*</span>
                <b>Email:</b>
              </p>
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            <label htmlFor="company">
              <p>
                <b>Your company (optional):</b>
              </p>
            </label>
            <input
              type="text"
              placeholder="Company"
              id="company"
              {...register("company")}
            />
            <label htmlFor="message">
              <p>
                <span>*</span>
                <b>Message</b>
              </p>
            </label>
            <textarea
              placeholder="Message"
              id="message"
              {...register("message", { required: true })}
            />
            <div className={styles.formButton}>
              <button disabled={!isValid || loading}>Send Message</button>
            </div>
            <br />
            <p
              className={`${styles.response} ${
                response.status === "success" ? styles.success : styles.error
              }`}
              dangerouslySetInnerHTML={{ __html: response.message }}
            ></p>
          </form>
        </div>
      </div>
    </div>
  );
};
