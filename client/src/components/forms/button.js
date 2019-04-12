import styled from 'styled-components'

import { light, primary } from 'styles/themes'

const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2em;
  color: ${light.base};

  background: ${primary.base};
  border: 0.05em solid ${primary.base};
  border-radius: 0.2em;

  width: 7.5em;
  height: 2.25em;
  margin: 1em 0;

  transition: background 0.25s, color 0.25s;

  &:hover, &:focus {
    background: ${light.base};
    color: ${primary.base};
    cursor: pointer;
  }
`

export default Button
