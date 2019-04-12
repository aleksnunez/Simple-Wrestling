import { createGlobalStyle } from 'styled-components'
import { light, dark } from './themes'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    color: ${dark.base};
    background: ${light.base};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`

export default GlobalStyle
