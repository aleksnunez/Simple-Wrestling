import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import LoginForm from 'components/forms/loginForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const Login = props => {
  const [state, setState] = useState({})

  const change = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const isFilled = state.email && state.password

  const isValid = () => {
    if (!isFilled) {
      return false
    }
    // ... more checks
    return true
  }

  const submit = (e) => {
    e.preventDefault()

    request({endpoint: '/api/login/post', body: JSON.stringify(state)})
    .then(res => alert(JSON.stringify(res)))
    .catch(err => new Error(err))
  }

  return (
    <Col>
      <LoginForm {...{change, isValid, submit}} />
    </Col>
  )
}

export default Login
