import styled from 'styled-components'

import Button from 'components/button'

const Cell = styled(Button)`
  height: 3em;
  width: 10vw;
  min-width: 6rem;
  border-radius: 0;

  background: ${props => props.theme.background.base};
  color: ${props => props.theme.foreground.base};

  &:hover, &:focus {
    color: ${props => props.theme.background.base};
    background: ${props => props.theme.primary.base};
    cursor: pointer;
  }
`

export default Cell
