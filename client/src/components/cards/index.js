
import styled from 'styled-components'

import Background from './background'
import Picture from './picture'
import Button from 'components/button'

const Wrapper = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${props => props.theme.background.base};

  width: 15em;
  height: 17em;
  padding: 0.5em;
  margin: 2em;
`

export { Wrapper, Background, Picture }
