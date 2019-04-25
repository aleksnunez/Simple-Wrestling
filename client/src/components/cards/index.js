
import styled from 'styled-components'

import Background from './background'
import Picture from './picture'
import Button from 'components/button'

const Wrapper = styled(Button)`
  position: relative;

  display: flex;

  flex-direction: column;
  align-items: center;

  border: none;

  width: 15em;
  height: 15em;
  padding: 0.5em;
  margin: 2em;

  &:hover, &:focus {
    background: ${props => props.theme.background.active};
  }
`

export { Wrapper, Background, Picture }
