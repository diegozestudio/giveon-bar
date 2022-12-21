import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/SubCategoria.module.scss";

function SubCategoria({ nombre, comidas }) {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.selectorAbierto} ${
        !isOpen && styles.selectorCerrado
      }`}
    >
      <div className={styles.contTituloIcono} onClick={handleClick}>
        <div className={styles.tituloSubCat}>
          {nombre[0].toUpperCase() + nombre.slice(1)}
        </div>
        <IoIosArrowDown
          fill="#222725"
          className={`${styles.icono} ${isOpen && styles.iconoRotate}`}
        />
      </div>

      {isOpen && (
        <div className={styles.contComidas}>
          {comidas.map((p) => {
            return (
              <div className={styles.comida}>
                <div>
                  <div className={styles.name}>{p.nombre}</div>
                  <div className={styles.descripcion}>{p.descripción}</div>
                </div>
                <div className={styles.name}>${p.precio}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SubCategoria;
