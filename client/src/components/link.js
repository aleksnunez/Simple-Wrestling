import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-family: 'IBM Plex Sans', sans-serif;

  color: ${props => props.theme.foreground.base};
  text-decoration-color: ${props => props.theme.foreground.base};

  transition: ${props => props.theme.transition};

  &:link, &:visited {
    color: ${props => props.theme.foreground.base};
    text-decoration-color: ${props => props.theme.foreground.base};
  }

  &:hover, &:active {
    color: ${props => props.theme.foreground.active};
    text-decoration-color: ${props => props.theme.foreground.active};
  }
`

export default StyledLink
