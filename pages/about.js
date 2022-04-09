import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

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
              name
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

export default function About({ data }) {
  const { imageParagraphs, paragraphs } = data
  const attributes1 = imageParagraphs.data[2].attributes
  const textObj = paragraphs.data[1]
  return (
    <>
      <Head>
        <title>WL Accountants | About</title>
        <meta name='description' content='Professional accounting services' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className={styles.aboutIntro}>
          <article>
            <Image
              src={attributes1.image.data.url || defaultImg}
              alt='defaultImg'
              width={1600}
              height={1200}
              priority={true}
            />
            <div>
              <h1>{attributes1.Title}</h1>
              <p>{attributes1.text}</p>
              {attributes1.linkURL && attributes1.linkText && (
                <Link href={attributes1.linkURL}>
                  <a>{attributes1.linkText}</a>
                </Link>
              )}
            </div>
          </article>
        </section>

        <section className={styles.convert}>
          <h1>{textObj.attributes.Title}</h1>
          <p>{textObj.attributes.text}</p>
          {textObj.attributes.linkURL && textObj.attributes.linkText && (
            <Link href={textObj.attributes.linkURL}>
              <a>{textObj.attributes.linkText}</a>
            </Link>
          )}
        </section>
      </main>
    </>
  )
}
