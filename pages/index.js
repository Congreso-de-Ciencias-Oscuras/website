import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Congreso de Ciencias Oscuras</title>
        <meta name="description" content="Sitio oficial del Congreso de Ciencias Oscuras" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h1>Hola</h1>
      </main>
    </>
  )
}
