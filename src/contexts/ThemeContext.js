import React, { useState } from "react"

export const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  // States
  const [isNavActive, setIsNavActive] = useState(false)

  // Context values
  const contextValue = {
    isNavActive,
    setIsNavActive,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
