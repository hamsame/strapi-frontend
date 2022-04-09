import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import { MapContainer } from '../components/Maps'
import ReactMarkdown from 'react-markdown'

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
  address {
    data{
      attributes{
        address
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

export default function Contact({ data }) {
  const address = data.address.data.attributes.address
  return (
    <>
      <Head>
        <title>WL Accountants | Contact</title>
        <meta name='description' content='Professional accounting services' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.contactPage}>
        <section className={styles.contact}>
          <div className={styles.formDiv}>
            <h1>Get In Touch</h1>
            <form className={styles.contactForm}>
              <div className={styles.formControl}>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' id='firstName' />
              </div>
              <div className={styles.formControl}>
                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' id='lastName' name='lastName' />
              </div>
              <div className={styles.formControl}>
                <label htmlFor='email'>Email Address: </label>
                <input type='text' id='email' name='email' />
              </div>
              <div className={styles.formControl}>
                <label htmlFor='message'>Message: </label>
                <textarea name='message' id='message'></textarea>
              </div>
              <button type='submit'>SUBMIT</button>
            </form>
          </div>
          <div className={styles.infoDiv}>
            <ReactMarkdown>{address}</ReactMarkdown>
          </div>
        </section>
        <section>
          <MapContainer />
        </section>
      </main>
    </>
  )
}
