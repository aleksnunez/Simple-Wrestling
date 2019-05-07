import React from 'react'

import Text from 'components/text'
import Link from 'components/link'
import { FormWrapper, InputWrapper, Input, Button } from '../'

const Form = (props) => {
  const { onChange, isDisabled, onSubmit } = props
  return (
    <FormWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Name*</Text>
        <Input autoFocus required
          type='text' name='name'
          onChange={onChange} />
      </InputWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Email*</Text>
        <Input required
          type='email' name='email'
          onChange={onChange} />
      </InputWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Password*</Text>
        <Input required
          type='password' name='password'
          onChange={onChange} />
      </InputWrapper>
      <Button disabled={isDisabled()} onClick={onSubmit}>
        Sign Up
      </Button>
      <Link to='/forgot'>
        Forgot Password
      </Link>
    </FormWrapper>
  )
}

export default Form
