import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Link from 'components/forms/link'
import Form from './form'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper = styled(Col)`
  border: 0.25em solid ${props => props.theme.primary.base};

  padding: 1em 5em;
`

const LoginForm = (props) => {
  return (
    <Wrapper>
      <Col>
        <Header text='Login' />
        <Link
          to={'/signup'}
          prompt={'Don\'t Have an Account?'}>
          Sign up here
        </Link>
      </Col>
      <Form {...props} />
    </Wrapper>
  )
}

export default LoginForm
