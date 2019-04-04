import React from 'react'
import styled from 'styled-components'

import LoginForm from 'components/forms/loginForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const Login = () => {
  return (
    <Col>
      <LoginForm />
    </Col>
  )
}

export default Login
