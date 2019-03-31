import styled from 'styled-components'

import { Font, Color } from 'styles/themes'

const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2em;
  color: ${Font.s};

  background: ${Color.p};
  border: none;
  border-radius: 0.2em;

  padding: 0.56em 2.9em;
  margin: 1.1em 0.1em;

  &:hover, &:focus {
    border: 0.15em solid ${Color.p};
    background: ${Font.s};
    color: ${Color.p};
    cursor: pointer;
    padding: 0.43em 2.75em;
  }
`

export default Button
