import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/menu.module.scss";
import Menu from "../../components/menu";
import Bebidas from "../../components/bebidas";

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

        <Menu></Menu>
        <Bebidas></Bebidas>
        <div>
          <Link href="/">Volver a Home</Link>
        </div>
      </main>
    </>
  );
}

export default index;
