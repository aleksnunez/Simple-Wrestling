import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${props => props.theme.foreground.base};
  text-decoration-color: ${props => props.theme.foreground.base};

  margin: 1em 0 0;

  transition: text-decoration-color 0.25s, color 0.25s;

  &:hover, &:active {
    text-decoration-color: ${props => props.theme.foreground.active};
    color: ${props => props.theme.foreground.active};
  }
`

export default StyledLink
