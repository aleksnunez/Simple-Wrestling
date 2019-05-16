import React from 'react'
import styled from 'styled-components'

import Button from 'components/button'

const StyledButton = styled(Button)`

  background: ${props => props.theme.primary.active};
  border: 0.05em solid ${props => props.theme.primary.active};

  height: 2em;
  width: 100%;
  min-width: 18em;
  margin: 1em 0;
`

const AddButton = props => {
  return (
    <StyledButton>
      Add Row
    </StyledButton>
  )
}

export default AddButton
