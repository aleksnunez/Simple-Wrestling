import React from 'react'
import styled from 'styled-components'

import uppercaseFirst from 'util/uppercaseFirst'
import Wrapper from '../cell'

const Key = styled(Wrapper)`
  background: ${props => props.theme.foreground.active};
  border: 1px solid ${props => props.theme.foreground.active};

  color: ${props => props.theme.background.base};
`

const Cell = props => <Key>{uppercaseFirst(props.col)}</Key>

export default Cell
