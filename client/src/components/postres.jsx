import { FaIceCream } from "react-icons/fa";
import styles from "../styles/postres.module.scss";

function postres() {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.contIcon}>
          <FaIceCream style={{ fill: "#222725" }} />
        </div>
        <div className={styles.title}>POSTRES</div>
      </div>
    </div>
  );
}

export default postres;
