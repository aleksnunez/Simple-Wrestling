import styled from 'styled-components'

import Button from './button'
import { InputWrapper, Input } from './input'

const FormWrapper = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50vw;
  max-width: 20em;
  padding: 1em 0;
`

export { FormWrapper, InputWrapper, Input, Button }
