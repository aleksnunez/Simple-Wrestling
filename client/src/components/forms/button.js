import styled from 'styled-components'

const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2em;
  color: ${props => props.theme.background.base};

  background: ${props => props.theme.primary.base};
  border: 0.05em solid ${props => props.theme.primary.base};
  border-radius: 0.2em;

  width: 7.5em;
  height: 2.25em;
  margin: 1em 0;

  transition: background 0.25s, color 0.25s;

  &:hover, &:focus {
    background: ${props => props.theme.background.base};
    color: ${props => props.theme.primary.base};
    cursor: pointer;
  }
`

export default Button
