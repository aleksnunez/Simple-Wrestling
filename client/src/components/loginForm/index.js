import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import { ReactComponent as Logo } from 'assets/yoga-baby.svg'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper = styled(Col)`
  border: 0.25em solid #00887A;
  background: #fff;

  padding: 1em 5em;
`
const Form = styled.form`
  padding: 1em 1em;
  margin-bottom: 1em;
  top: 4em;
`
const InputWrapper = styled.div`
  padding: 1em 1em;
`
const Text = styled.span`
  position: absolute;

  font-family: 'IBM Plex Sans', sans-serif;
  font-style: 400;
  font-weight: lighter;
  font-size: 0.75em;
  color: #828282;

  padding: 5px 0px 0px 0px;
  margin-top: 5px;
`
const Input = styled.input`
  height: 3em;
  width: 15em;

  box-sizing: border-box;
  border: 1px solid #C4C4C4;

  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: lighter;
  font-size: 1em;

  padding-left: 0.5em;
  margin-top: 2em;

  &:focus {
    outline: none !important;
    border: 1px solid #EB5757;
  }
`

const LoginForm = (props) => {
  return (
    <Wrapper>
      <Col>
        <Header text='Login' />
      </Col>
      <Form>
        <InputWrapper>
          <Text>Username</Text>
          <Input
            type='username'
            name='username'/>
        </InputWrapper>
        <InputWrapper>
          <Text>Password</Text>
          <Input
            type='password'
            name='password'
            autoComplete='off'/>
        </InputWrapper>
      </Form>
    </Wrapper>
  )
}

export default LoginForm
