import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import SignupLink from './signupLink'
import Form from './form'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper = styled(Col)`
  border: 0.25em solid ${props => props.theme.primary.base};
  background: ${props => props.theme.background.base};

  padding: 1em 5em;
`

const LoginForm = (props) => {
  return (
    <Wrapper>
      <Col>
        <Header text='Login' />
        <SignupLink />
      </Col>
      <Form {...props} />
    </Wrapper>
  )
}

export default LoginForm
