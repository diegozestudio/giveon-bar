import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giveon Bar</title>
        <link link rel="icon" type="image/svg+xml" href="/icono-giveon.svg"/>
      </Head>

      <main className={styles.container}>
        <div className={styles.title}>Proximamente...</div>
        <div className={styles.contImg}>
          <img src="/logo.svg" alt="" />
        </div>
        <div>
          <Link href="/menu">Ir al Menú</Link>
        </div>
      </main>
    </div>
  )
}
