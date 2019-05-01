import styled from 'styled-components'

import Text from 'components/text'
import { light } from 'styles/themes'

const Name = styled(Text)`
  position: absolute;
  left: 8em;

  width: 24em;
  height: 2em;
  margin: 0.5em 0 0;

  font-weight: 500;
  text-align: center;
  color: ${light.base};
`

export default Name