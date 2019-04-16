import React from 'react'

import Text from 'components/text'
import StyledLink from 'components/link'
import { FormWrapper, InputWrapper, Input, Button } from '../'

const Form = (props) => {
  return (
    <FormWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Email</Text>
        <Input
          autoFocus
          required
          type='email'
          name='email'
          onChange={props.onchange}/>
      </InputWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Password</Text>
        <Input
          required
          type='password'
          name='password'
          autoComplete='off'
          onChange={props.onchange}/>
      </InputWrapper>
      <Button onClick={props.submit}>
        Login
      </Button>
      <StyledLink to='/forgot' color='#828282' margin='0.5em 0'>
        Forgot Password
      </StyledLink>
    </FormWrapper>
  )
}

export default Form
