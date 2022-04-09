import React from 'react'
import { useGlobalContext } from './context'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  const { smallNav } = useGlobalContext()
  return (
    <>
      <Navbar />
      {!smallNav ? <main className='page'>{children}</main> : null}
      {!smallNav ? <Footer /> : null}
    </>
  )
}

export default Layout
