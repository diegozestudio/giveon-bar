import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import styles from "../styles/RedesSociales.module.scss";

function RedesSociales() {
  return (
    <div className={styles.redes}>
      <div className={styles.lineaRedes}>
        <BsInstagram className={styles.icon} />{" "}
        <a
          href="https://www.instagram.com/giveonbar/"
          target="_blank"
          rel="noreferrer"
        >
          @giveonbar
        </a>
      </div>

      <div className={styles.lineaRedes}>
        <BsWhatsapp className={styles.icon} />{" "}
        <a href="https://wa.me/5493855867396" target="_blank" rel="noreferrer">
          3855 867-396
        </a>
      </div>
    </div>
  );
}

export default RedesSociales;
