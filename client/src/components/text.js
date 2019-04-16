import styled from 'styled-components'

import { dark } from 'styles/themes'

const Text = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1em;
  color: ${dark.active};

  margin: ${props => props.margin ?  props.margin : 0};
`

export default Text
