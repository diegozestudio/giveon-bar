import Head from "next/head";
import Link from "next/link";
import RedesSociales from "../components/RedesSociales";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giveon Bar</title>
        <link link rel="icon" type="image/svg+xml" href="/icono-giveon.svg" />
      </Head>

      <main className={styles.container}>
        {/* <div className={styles.title}>Proximamente...</div> */}
        <div className={styles.contImg}>
          <img src="/logo.svg" alt="" />
        </div>
        <div className={styles.menu}>
          <Link href="/menu">Ir al Menú</Link>
        </div>

        <div>
          <RedesSociales></RedesSociales>
        </div>
      </main>
    </div>
  );
}
