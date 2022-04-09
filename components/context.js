import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [smallNav, setSmallNav] = useState(false)
  const [click, setClick] = useState(false)

  const changeNav = () => {
    setSmallNav(!smallNav)
  }

  const changeClick = () => {
    setClick(!click)
  }

  return (
    <AppContext.Provider
      value={{ changeClick, setSmallNav, changeNav, smallNav, click }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
