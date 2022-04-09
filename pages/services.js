import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Services.module.css'

export default function Services() {
  return (
    <>
      <Head>
        <title>WL Accountants | Services</title>
        <meta name='description' content='Professional accounting services' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <main><section className={styles.servicesIntro}></section></main> */}
      <main className={styles.services}>
        <h1>Services</h1>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos
            architecto similique at obcaecati, et magnam labore neque illo! Et!
          </p>
        </section>
        <section>
          <article>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, veritatis nesciunt molestiae ipsa maiores eveniet quo
              sequi voluptate neque quas fugit unde, beatae ex labore? Deleniti,
              sequi? Aut autem ipsam cupiditate aliquid. Est provident tempore
              quae, aspernatur eveniet ab delectus!
            </p>
          </article>
          <article>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, veritatis nesciunt molestiae ipsa maiores eveniet quo
              sequi voluptate neque quas fugit unde, beatae ex labore? Deleniti,
              sequi? Aut autem ipsam cupiditate aliquid. Est provident tempore
              quae, aspernatur eveniet ab delectus!
            </p>
          </article>
          <article>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, veritatis nesciunt molestiae ipsa maiores eveniet quo
              sequi voluptate neque quas fugit unde, beatae ex labore? Deleniti,
              sequi? Aut autem ipsam cupiditate aliquid. Est provident tempore
              quae, aspernatur eveniet ab delectus!
            </p>
          </article>
          <article>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, veritatis nesciunt molestiae ipsa maiores eveniet quo
              sequi voluptate neque quas fugit unde, beatae ex labore? Deleniti,
              sequi? Aut autem ipsam cupiditate aliquid. Est provident tempore
              quae, aspernatur eveniet ab delectus!
            </p>
          </article>
        </section>
      </main>
    </>
  )
}
