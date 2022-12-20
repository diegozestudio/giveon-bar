import { ImGlass2 } from "react-icons/im";
import styles from "../styles/tragos.module.scss";

function tragos() {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.contIcon}>
          <ImGlass2 style={{ fill: "#222725" }} />
        </div>
        <div className={styles.title}>TRAGOS</div>
      </div>
    </div>
  );
}

export default tragos;
