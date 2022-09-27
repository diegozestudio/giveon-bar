import Link from "next/link";
import { addComida } from "../../firebase/settings";
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
        {/* <button onClick={addComida}>Agregar primera comida</button> */}
      </main>
    </>
  );
}

export default index;
