import React from 'react'
import styled from 'styled-components'

import LoginForm from 'components/loginForm'

const Wrapper = styled.section`
  position: relative;
`

const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  )
}

export default Login
