import React from 'react'

import Text from 'components/text'
import Link from 'components/link'
import { FormWrapper, InputWrapper, Input, Button } from '../'

const Form = (props) => {
  const { change, isValid, submit } = props
  return (
    <FormWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Name*</Text>
        <Input autoFocus required
          type='text' name='name'
          onChange={change} />
      </InputWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Email*</Text>
        <Input required
          type='email' name='email'
          onChange={change} />
      </InputWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Password*</Text>
        <Input required
          type='password' name='password'
          onChange={change} />
      </InputWrapper>
      <Button disabled={!isValid()} onClick={submit}>
        Sign Up
      </Button>
      <Link to='/forgot'>
        Forgot Password
      </Link>
    </FormWrapper>
  )
}

export default Form
