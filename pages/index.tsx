import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Next App</title>
        <meta name="description" content="Hilmi Mubarok" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <a href="https://hilmimubarok.com">Hilmi Mubarok!</a>
        </h1>

        <p className={styles.description}>
          What i've learned about NextJS{' '}
        </p>

        <div className="grid grid-cols-4 gap-4">
          <Link href="/basic-routing/blog">
            <a className="p-5 bg-slate-900 rounded-xl text-white">
              Basic Routing
            </a>
          </Link>
        </div>

      </main>

    </div>
  )
}

export default Home
