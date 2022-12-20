import Head from "next/head";
import Link from "next/link";
import Categorias from "../../components/Categorias";
import styles from "../../styles/menu.module.scss";
import db from "../../../db.json";
import { useState } from "react";

function index() {
  const [categoriaActiva, setcategoriaActiva] = useState({
    opcionActiva: "menu",
  });

  const handleActive = (argumento) => {
    setcategoriaActiva({
      ...categoriaActiva,
      opcionActiva: argumento,
    });
  };

  return (
    <>
      <Head>
        <title>Menú - Giveon Bar</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.contImg}>
          <img src="/icono-giveon-2.svg" alt="logo-giveon" />
        </div>

        <Categorias handleActive={handleActive}></Categorias>

        <div>
          {Object.keys(db[categoriaActiva.opcionActiva].subCategorias).map(
            (p) => {
              return <div>{p}</div>;
            }
          )}
        </div>

        <div>
          <Link href="/">Volver a Home</Link>
        </div>
      </main>
    </>
  );
}

export default index;
