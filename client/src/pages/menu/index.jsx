import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/menu.module.scss";
import Menu from "../../components/menu";
import Bebidas from "../../components/bebidas";
import Tragos from "../../components/tragos";
import Postres from "../../components/postres";

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

        <div className={styles.menu}>
          <Menu></Menu>
          <Bebidas></Bebidas>
          <Tragos></Tragos>
          <Postres></Postres>
        </div>
        <div className={styles.linea} />
        <div>
          <Link href="/">Volver a Home</Link>
        </div>
      </main>
    </>
  );
}

export default index;
