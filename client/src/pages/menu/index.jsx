import Head from "next/head";
import Link from "next/link";
import Categorias from "../../components/Categorias";
import styles from "../../styles/menu.module.scss";

function index() {
  return (
    <>
      <Head>
        <title>Menú - Giveon Bar</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.contImg}>
          <img src="/icono-giveon-2.svg" alt="logo-giveon" />
        </div>

        <Categorias></Categorias>

        <div>
          <Link href="/">Volver a Home</Link>
        </div>
      </main>
    </>
  );
}

export default index;
