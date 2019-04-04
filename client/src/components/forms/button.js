import styled from 'styled-components'

import { Font, Color } from 'styles/themes'

const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2em;
  color: ${Font.s};

  background: ${Color.p};
  border: none;
  border-radius: 0.2em;

  padding: 0.5em 3em;
  margin: 1em 0;

  transition: background 0.75s, color 0.75s;

  &:hover, &:focus {
    border: 0.05em solid ${Color.p};
    background: ${Font.s};
    color: ${Color.p};
    cursor: pointer;
    padding: 0.45em 2.95em;
    margin: 1em 0;
  }
`

export default Button
