import styled from 'styled-components'

import { light, primary } from 'styles/themes'

const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1em;
  color: ${light.base};

  background: ${primary.base};
  border: 0.05em solid ${primary.base};
  border-radius: 0 0.2em 0.2em 0;

  padding: 0.688em 2em;

  transition: background 0.25s, color 0.25s;

  &:hover, &:focus {
    background: ${light.base};
    color: ${primary.base};
    cursor: pointer;
  }
`

export default Button
