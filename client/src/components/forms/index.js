import styled from 'styled-components'

import Button from './button'
import { InputWrapper, Input } from './input'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20em;
  padding: 1em 1em;
`

export { FormWrapper, InputWrapper, Input, Button }
