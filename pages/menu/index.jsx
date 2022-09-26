import Link from "next/link";
import styles from "../../styles/menu.module.scss";

function index() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.contImg}>
          <img src="/logo.svg" alt="" />
        </div>
        <div>
          <Link href="/">Volver a Home</Link>
        </div>
      </main>
    </>
  );
}

export default index;
