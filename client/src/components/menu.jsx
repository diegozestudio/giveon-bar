import { ImSpoonKnife } from "react-icons/im";
import styles from "../styles/menuprincipal.module.scss";

function menu() {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.contIcon}>
          <ImSpoonKnife style={{ fill: "#222725" }} />
        </div>
        <div>MENU</div>
      </div>
    </div>
  );
}

export default menu;
