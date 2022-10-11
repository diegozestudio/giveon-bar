import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CategorieFood from "../../components/CategorieFood";
import { getCategories } from "../../controllers/controllers";
import { getFoods } from "../../firebase/firebase";
import styles from "../../styles/menu.module.scss";

function index() {
  const [comidas, setComidas] = useState();
  const [categorias, setCategorias] = useState();

  useEffect(async () => {
    setComidas(await getFoods());
    setCategorias(await getCategories());
  }, []);

  return (
    <>
      <Head>
        <title>Menú - Giveon Bar</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.contImg}>
          <img src="/logo.svg" alt="" />
        </div>

        <div>Categorias:</div>
        {categorias ? (
          categorias.map((categoria) => {
            return (
              <CategorieFood categorieName={categoria} comidas={comidas}/>
            );
          })
        ) : (
          <div>Cargando...</div>
        )}

        <div>
          <Link href="/">Volver a Home</Link>
        </div>
      </main>
    </>
  );
}

export default index;
