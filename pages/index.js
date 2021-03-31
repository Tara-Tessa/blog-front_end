import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home(articles) {
  console.log(articles.articles + "hello")
  const posts = articles.articles;
  return (
    <div className={styles.container}>
      
      <Layout/>

      <main className={styles.main}>

        <p className={styles.description}>
          Read your favorite articles right at Home.
        </p>

        <div className={styles.grid}>

          {posts.map(article => (
            <a key={article.id} href={`/articles/${article.slug}`} className={styles.card}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch(`${process.env.STRAPI_URL}/articles`);
  const articles = await res.json()

  // The value of the `props` key will be
  //  passed to the `Home` component
    if (!articles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { articles }, // will be passed to the page component as props
  }
}