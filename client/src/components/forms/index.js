import styled from 'styled-components'

import Button from './button'
import Input from './input'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20em;
  padding: 1em 1em;
`
const InputWrapper = styled.div`
  padding: 1em 1em;
`

export { Col, InputWrapper, Input, Button }
