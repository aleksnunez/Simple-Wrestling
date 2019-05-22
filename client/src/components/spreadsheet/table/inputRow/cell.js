import React, { useState } from 'react'
import styled from 'styled-components'

import Wrapper from '../cell'

const Hoverable = styled(Wrapper)`
  &:hover, &:focus {
    outline: 2px solid ${props => props.theme.primary.active};
    border-bottom: 1px solid ${props => props.theme.background.base};
    border-right: 1px solid ${props => props.theme.background.base};
    cursor: cell;
    z-index: 500;
  }

  &:active {
    text-shadow:
      -0.25px -0.25px 0 ${props => props.theme.background.base},
      0.25px 0.25px 0 ${props => props.theme.background.base};
  }
`
const Input = styled.input`
  position: absolute;
  top: 0.05em;
  left: 0.05em;

  color: ${props => props.theme.foreground.base};
  background: ${props => props.theme.background.base};
  font-size: 0.8rem;
  font-weight: lighter;
  text-align: center;

  height: calc(100% - 0.1em);
  width: calc(100% - 0.1em);

  box-sizing: border-box;
  border: 1px dotted ${props => props.theme.primary.active};
  outline: none !important;
`

const Cell = props => {
  const { onChange, row, col, value } = props
  const [state, setState] = useState(false)

  const open = (e) => {
    e.preventDefault()
    setState(true)
  }

  const close = (e) => {
    e.preventDefault()
    setState(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      close(e)
    }
  }

  const cell = () => {
    if (state) {
      return (
        <Wrapper>
          <Input autoFocus
            type='text' data-row={row} data-col={col}
            value={value} onChange={onChange} onBlur={close}
            onKeyDown={onKeyDown} />
        </Wrapper>
      )
    }
    return (
      <Hoverable onClick={open}>
        {value}
      </Hoverable>
    )
  }

  return cell()
}

export default Cell
