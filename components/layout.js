import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Layout() {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          De Naald
        </h1>

    </>
  )
}