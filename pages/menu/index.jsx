import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import FormAddFood from "../../components/FormAddFood";
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

        {/* <FormAddFood/> */}

        <div>Categorias:</div>
        {categorias?.map((categoria) => {
          return (
            <div key={categoria}>
              <div>{categoria}:</div>
              {comidas?.map((comida) => {
                if (comida.categoria === categoria) {
                  return <div key={comida.id}>{comida.nombre}</div>;
                }
              })}
              <br />
            </div>
          );
        })}

        <div>
          <Link href="/">Volver a Home</Link>
        </div>
      </main>
    </>
  );
}

export default index;
