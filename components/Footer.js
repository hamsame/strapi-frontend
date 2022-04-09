import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <div>
          <h4>Pages</h4>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            <li>
              <Link href='/contact'>Privacy</Link>
            </li>
          </ul>
        </div>
        <div className='links'>
          <h4>Follow us</h4>
          <ul>
            <li>
              <a
                href='https://www.twitter.com/'
                target='_blank'
                rel='noreferrer'
              >
                Twitter
                <FaTwitter size={25} />
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
                <FaFacebookSquare size={25} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noreferrer'
              >
                Linkedin
                <FaLinkedin size={25} />
              </a>
            </li>
          </ul>
        </div>
        <p>WL Accountants &copy; 2022 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
