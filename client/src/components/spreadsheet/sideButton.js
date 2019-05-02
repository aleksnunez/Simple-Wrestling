import styled from 'styled-components'

import Button from 'components/button'

const SideButton = styled(Button)`
  height: 3em;
  width: calc(10vw - 1em);
  min-width: 5em;
  margin: 0 0.5em;

  border-radius: 0.5em;

  &:hover, &:focus {
    color: ${props => props.theme.background.base};
    background: ${props => props.theme.primary.base};
    border: 0.05em solid ${props => props.theme.background.base};
    text-shadow:
    -0.25px -0.25px 0 ${props => props.theme.background.base},
    0.25px 0.25px 0 ${props => props.theme.background.base};
  }
`

export default SideButton
