import React, { useState } from 'react'
import styled from 'styled-components'

import Button from 'components/button'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 3em;
  width: 15vw;
  min-width: 6rem;

  background: ${props => props.theme.background.base};
  border: 0.05em solid ${props => props.theme.primary.base};
  border-radius: 0;

  color: ${props => props.theme.foreground.base};
`
const Stat = styled.div`
`
const Value = styled.div`
`
const Input = styled.input`
  font-weight: lighter;
  text-align: center;

  height: 100%;
  width: 100%;
  padding-left: 2.5%;

  box-sizing: border-box;
  border: none;

  &:focus {
    outline: none !important;
  }

`
const Close = styled(Button)`
  position: absolute;

  z-index: 500;
`

const Cell = props => {
  const { name, onChange, stat, value } = props
  const [state, setState] = useState(false)

  const open = (e) => {
    e.preventDefault()
    setState(true)
  }

  const close = (e) => {
    e.preventDefault()
    setState(false)
  }

  const cell = () => {
    if (state) {
      return (
        <Wrapper>
          <Input autoFocus
            type='text' name={JSON.stringify({name: name, stat: stat})}
            value={value} onChange={onChange} />
          <Close onClick={close}>X</Close>
        </Wrapper>
      )
    }
    return (
      <Wrapper onClick={open}>
        <Stat>{stat}</Stat>
        <Value>{value}</Value>
      </Wrapper>
    )
  }

  return cell()
}

export default Cell
