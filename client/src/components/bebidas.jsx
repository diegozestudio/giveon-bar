import { FaWineBottle } from "react-icons/fa";
import styles from "../styles/bebidas.module.scss";

function bebidas() {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.contIcon}>
          <FaWineBottle style={{ fill: "#222725" }} />
        </div>
        <div>BEBIDAS</div>
      </div>
    </div>
  );
}

export default bebidas;
