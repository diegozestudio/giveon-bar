import React, { useState } from "react";
import { addFood } from "../firebase/firebase";
import styles from "../styles/menu.module.scss";

const categorias = ["Lomitos", "Hamburguesas", "Carnes"];

function FormAddFood() {
  const [comida, setComida] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
    esVeggie: false,
    visibilidad: true,
    imagen: ""
  });

  const handleChange = (e) => {
    setComida({
      ...comida,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(comida);
    setComida({
      ...comida,
      nombre: "",
      precio: "",
      descripcion: "",
      esVeggie: false,
      visibilidad: true,
      imagen: ""
    });
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div className={styles.contInput}>
        <div className={styles.titleInput}>Nombre:</div>
        <input
          type="text"
          name="nombre"
          value={comida.nombre}
          onChange={handleChange}
        />
      </div>
      <div className={styles.contInput}>
        <div className={styles.titleInput}>Precio:</div>
        <input
          type="text"
          name="precio"
          value={comida.precio}
          onChange={handleChange}
        />
      </div>
      <div className={styles.contInput}>
        <div className={styles.titleInput}>Categoria:</div>
        <select name="categoria" onChange={handleChange}>
          <option value="">Selecciona una Categoria</option>
          {categorias.map((categoria) => (
            <option value={categoria} key={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.contInput}>
        <div className={styles.titleInput}>Apto Veggie:</div>
        <div>
          <div>NO</div>
          <input type="radio" name="esVeggie" value={false} onChange={handleChange}/>
        </div>
        <div>
          <div>SI</div>
          <input type="radio" name="esVeggie" value={true} onChange={handleChange}/>
        </div>
      </div>

      <div className={styles.contInput}>
        <div className={styles.titleInput}>Descripcion:</div>
        <textarea
          type="text"
          name="descripcion"
          value={comida.descripcion}
          onChange={handleChange}
          rows="5"
          maxLength="200"
        />
      </div>
      <button>Agregar Comida</button>
    </form>
  );
}

export default FormAddFood;
