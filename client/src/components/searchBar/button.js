import styled from 'styled-components'

import { Font, Color } from 'styles/themes'

const size = {height: 0.688, width: 2}

const Button = styled.button`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1em;
  color: ${Font.s};

  background: ${Color.p};
  border: none;
  border-radius: 0 0.2em 0.2em 0;

  padding: ${`${size.height}em ${size.width}em`};

  transition: background 0.25s, color 0.25s;

  &:hover, &:focus {
    border: 0.05em solid ${Color.p};
    background: ${Font.s};
    color: ${Color.p};
    cursor: pointer;
    padding: ${`${size.height - 0.05}em ${size.width - 0.05}em`};
  }
`

export default Button
