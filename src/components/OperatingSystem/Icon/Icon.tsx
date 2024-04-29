import windowsLogo from "./icons/windowsLogo.png";
import windowsSound from "./icons/windowsSound.png";
import doom_icon from "./icons/doom_icon.png";
import oregon_trail from "./icons/oregon_trail.png";
import portfolio from "./icons/portfolio.png";
import explorer from "./icons/explorer.png";
import minimize from "./icons/minimize.png";
import close from "./icons/close.png";
import resize from "./icons/resize.png";
import window from "./icons/window.png";
import linkedin from "./icons/linkedin.png";
import github from "./icons/github.png";
import resume from "./icons/resume.png";
import music from "./icons/music.png";
import styles from "./Icon.module.css";

export type IconName = keyof typeof icons;
interface Props {
  icon: IconName;
  size?: number;
}

const icons = {
  windowsLogo: windowsLogo,
  windowsSound: windowsSound,
  doom_icon: doom_icon,
  oregon_trail: oregon_trail,
  portfolio: portfolio,
  explorer: explorer,
  window: window,
  minimize: minimize,
  close: close,
  resize: resize,
  linkedin: linkedin,
  github: github,
  music: music,
  resume: resume,
};

export const Icon = ({ icon, size = 16 }: Props) => {
  return (
    <img
      className={styles.icon}
      alt={""}
      src={icons[icon]}
      style={{ width: size, height: size }}
    />
  );
};
