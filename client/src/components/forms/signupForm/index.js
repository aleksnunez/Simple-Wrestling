import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import LoginLink from './loginLink'
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

const SignupForm = (props) => {
  return (
    <Wrapper>
      <Col>
        <Header text='Sign Up' />
        <LoginLink />
      </Col>
      <Form {...props} />
    </Wrapper>
  )
}

export default SignupForm
