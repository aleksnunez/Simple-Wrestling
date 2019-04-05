import React from 'react'

import Text from 'components/text'
import StyledLink from 'components/link'
import { Col, InputWrapper, Input, Button } from '../'

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
        Login
      </Button>
      <StyledLink to='/forgot' color='#828282' margin='0.5em 0'>
        Forgot Password
      </StyledLink>
    </Col>
  )
}

export default Form
