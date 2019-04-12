import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { dark } from 'styles/themes'

const StyledLink = styled(Link)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${dark.base};
  text-decoration-color: ${dark.base};

  margin: 1em 0 0;

  transition: text-decoration-color 0.25s, color 0.25s;

  &:hover, &:active {
    text-decoration-color: ${dark.active};
    color: ${dark.active};
  }
`

export default StyledLink
