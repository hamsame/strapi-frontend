import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const URL = process.env.STRAPIBASEURL
const defaultImg =
  'https://images.pexels.com/photos/9891764/pexels-photo-9891764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
 paragraphs {
    data {
      id
      attributes{
        Title
        text
        linkText
        linkURL
      }
    }
  }
  heroSection {
    data {
		attributes {
      Title
      text
      linkURL
      linkText
    }
    }
  }
  imageParagraphs{
		data{
      attributes{
        linkURL
        linkText
        image {
          data{
            attributes{
              url
              width
              height
            }
          }
        }
        Title
        text
      }
    }
  }
}`,
    }),
  }

  const res = await fetch(`${URL}graphql`, fetchParams)

  const { data } = await res.json()

  return {
    props: { data },
  }
}

export default function Home({ data }) {
  const { heroSection, imageParagraphs, paragraphs } = data
  const attributes1 = heroSection.data
  const textOBj = paragraphs.data[0].attributes
  return (
    <>
      <Head>
        <title>WL Accountants</title>
        <meta name='description' content='Professional accounting services' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className={styles.hero}>
          <article>
            <h1>{attributes1.Title || 'WL Accountants'}</h1>
            <p>
              {attributes1.text}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis rerum placeat prrporis similique, possimus nihil esse
              autem omnis modi eum!
            </p>
            {attributes1.linkURL && attributes1.linkURL && (
              <Link href={attributes1.linkURL}>
                <a>{attributes1.linkText}</a>
              </Link>
            )}
          </article>
        </section>
        <section>
          {imageParagraphs.data.slice(0, 2).map((info, index) => {
            const { attributes } = info
            const imageURL = attributes.image.data.attributes.url
            return (
              <article className={styles.description} key={index}>
                <Image
                  src={imageURL || defaultImg}
                  alt=''
                  width={1600}
                  height={1200}
                  placeholder={defaultImg}
                  loading='eager'
                />
                <div>
                  <h1>{attributes.Title}</h1>
                  <p>{attributes.text}</p>
                  {attributes.linkURL && attributes.linkText && (
                    <Link href={attributes.linkURL}>
                      <a>{attributes.linkText}</a>
                    </Link>
                  )}
                </div>
              </article>
            )
          })}
        </section>
        <section className={styles.convert}>
          <h1>{textOBj.Title}</h1>
          <p>{textOBj.text}</p>
          {/*  Render link if its added to the cms*/}
          {textOBj.linkURL && textOBj.linkText && (
            <Link href={textOBj.linkURL}>
              <a>{textOBj.linkText}</a>
            </Link>
          )}
        </section>
      </main>
    </>
  )
}
