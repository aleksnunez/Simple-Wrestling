import React from 'react'
import styled from 'styled-components'

import Button from 'components/button'

const Wrapper = styled.div`
  display: flex;
  flex-direciton: row;
  justify-content: center;
  width: 100%;
`
const StyledButton = styled(Button)`
  background: ${props => props.theme.primary.active};
  border: 0.05em solid ${props => props.theme.primary.active};
  outline: none !important;

  height: 2em;
  width: 20vw;
  min-width: 18em;
  margin: 0.4em 0;

  &:hover {
    color: ${props => props.theme.signal.success};
    border: 0.1em solid ${props => props.theme.signal.success};
  }

  &:active {
    text-shadow:
      -0.25px -0.25px 0 ${props => props.theme.signal.success},
      0.25px 0.25px 0 ${props => props.theme.signal.success};
  }
`

const AddButton = props => {
  const { addRow } = props
  const onClick = (e) => {
    e.preventDefault()
    addRow()
  }

  return (
    <Wrapper>
      <StyledButton onClick={onClick}>
        Add Row
      </StyledButton>
    </Wrapper>
  )
}

export default AddButton
