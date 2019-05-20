import React, { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: absolute;
  left: 100%;

  height: calc(100% - 0.1em);
  width: 3em;

  text-align: center;
  color: ${props => props.theme.background.base};

  outline: none !important;
  background: ${props => props.theme.primary.active};
  border: 0.1em solid ${props => props.theme.primary.active};
  border-radius: 0 5em 5em 0;

  transition: ${props => props.theme.transition};

  &:hover {
    width: 6em;

    cursor: pointer;
    color: ${props => props.theme.signal.danger};

    background: ${props => props.theme.background.base};
    border: 0.1em solid ${props => props.theme.signal.danger};
  }

  &:active {
    text-shadow:
      -0.25px -0.25px 0 ${props => props.theme.signal.danger},
      0.25px 0.25px 0 ${props => props.theme.signal.danger};
  }
`

const DeleteButton = props => {
  const { removeRow, row } = props
  const [extended, setExtended] = useState(false)
  const toggle = () => setExtended(!extended)
  const onClick = (e) => {
    e.preventDefault()
    removeRow(row)
  }

  return (
    <StyledButton
      onClick={onClick}
      onMouseEnter={toggle}
      onMouseLeave={toggle}>
      {extended ? 'DELETE' : 'X'}
    </StyledButton>
  )
}

export default DeleteButton
