import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { useGlobalContext } from './context'

function Navbar() {
  const { smallNav, setSmallNav, changeNav } = useGlobalContext()

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarWrapper}>
          <h1 onClick={() => setSmallNav(false)} className={styles.navTitle}>
            <Link href='/'>
              <a>WL Accountants</a>
            </Link>
          </h1>
          <button onClick={changeNav}>
            {!smallNav ? <>&#8801;</> : <>&#x2715;</>}
          </button>
          <ul className={smallNav ? 'showLinks' : ''}>
            <li onClick={() => setSmallNav(false)}>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li onClick={() => setSmallNav(false)}>
              <Link href='/services'>
                <a>Services</a>
              </Link>
            </li>
            <li onClick={() => setSmallNav(false)}>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
