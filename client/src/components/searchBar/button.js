import styled from 'styled-components'

const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1em;
  color: ${props => props.theme.background.base};

  background: ${props => props.theme.primary.base};
  border: 0.05em solid ${props => props.theme.primary.base};
  border-radius: 0 0.2em 0.2em 0;

  width: 6em;
  height: 2.5em;

  transition: ${props => props.theme.transition};

  &:hover, &:focus {
    background: ${props => props.theme.background.base};
    color: ${props => props.theme.primary.base};
    cursor: pointer;
  }
`

export default Button
