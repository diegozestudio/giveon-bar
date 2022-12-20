import { ImSpoonKnife } from "react-icons/im";
import { FaIceCream, FaWineBottle } from "react-icons/fa";
import { ImGlass2 } from "react-icons/im";
import styles from "../styles/Categorias.module.scss";
import { useState } from "react";

function Categorias({ handleActive }) {
  const [index, setindex] = useState({
    opcionActiva: "menu",
  });

  const handleClick = (evento) => {
    setindex({
      ...index,
      opcionActiva: evento,
    });
    handleActive(evento);
  };
  return (
    <div className={styles.iconosCategoria}>
      <div className={styles.item} onClick={() => handleClick("menu")}>
        <div
          className={
            index.opcionActiva === "menu" ? styles.activo : styles.contIcon
          }
        >
          <ImSpoonKnife
            style={
              index.opcionActiva === "menu"
                ? { fill: "#F7F7F2" }
                : { fill: "#222725" }
            }
          />
        </div>
        <div className={styles.title}>MENU</div>
      </div>

      <div className={styles.item} onClick={() => handleClick("bebidas")}>
        <div
          className={
            index.opcionActiva === "bebidas" ? styles.activo : styles.contIcon
          }
        >
          <FaWineBottle
            style={
              index.opcionActiva === "bebidas"
                ? { fill: "#F7F7F2", transform: "rotate(-45deg)" }
                : { fill: "#222725", transform: "rotate(-45deg)" }
            }
          />
        </div>
        <div className={styles.title}>BEBIDAS</div>
      </div>

      <div className={styles.item} onClick={() => handleClick("tragos")}>
        <div
          className={
            index.opcionActiva === "tragos" ? styles.activo : styles.contIcon
          }
        >
          <ImGlass2
            style={
              index.opcionActiva === "tragos"
                ? { fill: "#F7F7F2" }
                : { fill: "#222725" }
            }
          />
        </div>
        <div className={styles.title}>TRAGOS</div>
      </div>

      <div className={styles.item} onClick={() => handleClick("postres")}>
        <div
          className={
            index.opcionActiva === "postres" ? styles.activo : styles.contIcon
          }
        >
          <FaIceCream
            style={
              index.opcionActiva === "postres"
                ? { fill: "#F7F7F2" }
                : { fill: "#222725" }
            }
          />
        </div>
        <div className={styles.title}>POSTRES</div>
      </div>
    </div>
  );
}

export default Categorias;
