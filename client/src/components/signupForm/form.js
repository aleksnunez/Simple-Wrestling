import React from 'react'
import styled from 'styled-components'

import Text from 'components/text'
import Button from './button'
import StyledLink from 'components/link'

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
const Input = styled.input`
  height: 3em;
  width: 20em;

  box-sizing: border-box;
  border: 1px solid #C4C4C4;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: lighter;
  font-size: 1em;

  padding-left: 0.5em;

  &:focus {
    outline: none !important;
    border: 1px solid #888888;
  }
`

const Form = () => {
  return (
    <Col>
      <InputWrapper>
        <Text margin='0 0 0.5em'>Username</Text>
        <Input
          type='username'
          name='username'/>
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
