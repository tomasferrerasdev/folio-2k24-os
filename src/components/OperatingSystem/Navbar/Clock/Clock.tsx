import { useState, useEffect } from "react";
import { Icon } from "../../Icon/Icon";
import styles from "./Clock.module.css";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedMinutes =
      minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    return hours.toString() + ":" + formattedMinutes + " " + ampm;
  };

  return (
    <div className={styles.clock}>
      <Icon icon="windowsSound" />
      <p>{formatTime(time)}</p>
    </div>
  );
};
