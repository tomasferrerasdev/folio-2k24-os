import { Link } from "react-router-dom";
import { Icon } from "../../Icon/Icon";
import styles from "./NotFound.module.css";
export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundError}>
        <Icon icon="error" size={36} />
        <p>
          Oooops! you broke everything or find a bug... Doens't matter, you can
          return to the home by <Link to="/">clicking here</Link>.
        </p>
      </div>
    </div>
  );
};
