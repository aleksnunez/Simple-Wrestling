import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 0.75rem;
  color: ${props => props.theme.background.base};
  text-decoration: none;

  width: 15em;
  height: 17em;
  padding: 0.5em;
  margin: 2em;

  background: ${props => props.theme.primary.base};
  border: 1px solid ${props => props.theme.primary.base};
  border-radius: 0.2em;

  transition: ${props => props.theme.transition};

  &:hover, &:focus {
    cursor: pointer;
    color: ${props => props.theme.primary.base};
    background: ${props => props.theme.background.base};
  }

  &:active {
    text-shadow:
      -0.25px -0.25px 0 ${props => props.theme.primary.base},
      0.25px 0.25px 0 ${props => props.theme.primary.base};
  }
`

export default StyledLink
