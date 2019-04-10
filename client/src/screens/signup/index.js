import React from 'react'
import styled from 'styled-components'

import SignupForm from 'components/forms/signupForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const SignUp = () => {
  return (
    <Col>
      <SignupForm />
    </Col>
  )
}

export default SignUp
