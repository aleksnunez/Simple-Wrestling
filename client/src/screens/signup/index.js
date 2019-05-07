import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import SignupForm from 'components/forms/signupForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const SignUp = props => {
  const [state, setState] = useState({})

  const change = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const isFilled = state.first && state.last && state.email && state.password

  const isValid = () => {
    if (!isFilled) {
      return false
    }
    // ... more checks
    return true
  }

  const submit = (e) => {
    e.preventDefault()

    request({endpoint: '/api/signup/addCoach', body: JSON.stringify(state)})
    .then(res => console.log(res))
    .catch(err => new Error(err))
  }

  return (
    <Col>
      <SignupForm {...{change, isValid, submit}} />
    </Col>
  )
}

export default SignUp
