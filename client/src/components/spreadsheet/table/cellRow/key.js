import React from 'react'
import styled from 'styled-components'

import uppercaseFirst from 'util/uppercaseFirst'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 3em;
  width: 15vw;
  min-width: 6rem;

  background: ${props => props.theme.foreground.active};
  border: 1px solid ${props => props.theme.foreground.active};
  border-radius: 0;

  color: ${props => props.theme.background.base};
  font-size: 0.8rem;
`

const Key = props => <Wrapper>{uppercaseFirst(props.col)}</Wrapper>

export default Key
