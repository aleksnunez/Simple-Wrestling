import React from 'react'

import Text from 'components/text'
import Link from 'components/link'
import { FormWrapper, InputWrapper, Input, Button } from '../'

const Form = (props) => {
  return (
    <FormWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>First Name</Text>
        <Input
          autoFocus
          required
          type='text'
          name='first'
          onChange={props.onchange}/>
      </InputWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Last Name</Text>
        <Input
          autoFocus
          required
          type='text'
          name='last'
          onChange={props.onchange}/>
      </InputWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Wrestling Team/ Club</Text>
        <Input
          required
          type='text'
          name='team'
          autoComplete='off'
          onChange={props.onchange}/>
      </InputWrapper>
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
        Sign Up
      </Button>
      <Link to='/forgot'>
        Forgot Password
      </Link>
    </FormWrapper>
  )
}

export default Form
