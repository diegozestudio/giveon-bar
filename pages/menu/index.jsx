import Link from "next/link"
import styles from '../../styles/menu.module.scss'

function index() {
  
  return (<>
    <main className={styles.container}>
        <div className={styles.title}>Proximamente...</div>
        <div className={styles.contImg}>
          <img src="/logo.svg" alt="" />
        </div>
        <div>
          <Link href="/">Ir al Home</Link>
        </div>
      </main>
  </>
  )
}

export default index