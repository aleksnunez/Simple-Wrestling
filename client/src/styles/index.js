import React, { useState } from 'react'
import Routes from 'routes'
import styled, { ThemeProvider } from 'styled-components'

import { light, dark } from './theme'
import GlobalStyle from './global'

const Styles = () => {
  const [theme, setTheme] = useState(light)

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

export default Styles
