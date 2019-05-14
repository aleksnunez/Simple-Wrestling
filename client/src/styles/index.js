import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { light, dark } from './theme'
import Routes from 'routes'
import GlobalStyle from './global'

const Styles = props => {
  const [theme, setTheme] = useState(light)

  const onChangeTheme = e => {
    e.preventDefault()

    if (theme === light) {
      setTheme(dark)
    } else if (theme === dark) {
      setTheme(light)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes changeTheme={onChangeTheme} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

export default Styles
