import Head from "next/head";
import Link from "next/link";
import FormAddFood from "../../components/FormAddFood";
import styles from "../../styles/menu.module.scss";


function index() {
  return (
    <>
      <Head>
        <title>Menú - Giveon Bar</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.contImg}>
          <img src="/logo.svg" alt="" />
        </div>

        <FormAddFood/>

        <div>
          <Link href="/">Volver a Home</Link>
        </div>
      </main>
    </>
  );
}

export default index;
