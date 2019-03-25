import React from 'react'

import Text from 'components/text'
import Button from './button'
import StyledLink from 'components/link'
import { Col, InputWrapper, Input } from 'components/formLib'

const Form = () => {
  return (
    <Col>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Email</Text>
        <Input
          type='email'
          name='email'/>
      </InputWrapper>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Password</Text>
        <Input
          type='password'
          name='password'
          autoComplete='off'/>
      </InputWrapper>
      <Button>
        Sign Up
      </Button>
      <StyledLink to='/forgot' color='#828282' margin='0.5em 0'>
        <Text>Forgot Password</Text>
      </StyledLink>
    </Col>
  )
}

export default Form
