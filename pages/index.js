import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>snik.it - APSDC</title>
        <meta name="description" content="A website for the event technophillia 3.0 (2022) made by Siddharth Sharma and Supriyo Ghosh from APSDC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
