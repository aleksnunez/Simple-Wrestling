import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration-color: ${props => props.color ?  props.color : '#333333'};
  margin: ${props => props.margin ?  props.margin : 0};
`

export default StyledLink
