import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${props => props.color ?  props.color : '#333333'};
  text-decoration-color: ${props => props.color ?  props.color : '#333333'};
  transition: text-decoration-color 0.25s, color 0.25s;

  &:hover, &:active {
    text-decoration-color: #C4C4C4;
    color: #C4C4C4;
  }

  margin: ${props => props.margin ?  props.margin : 0};
`

export default StyledLink
