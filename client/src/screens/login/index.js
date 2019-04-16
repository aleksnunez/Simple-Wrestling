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

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    request({endpoint: '/api/login/post', body: JSON.stringify(state)})
    .then(res => alert(JSON.stringify(res)))
    .catch(err => new Error(err))
  }

  return (
    <Col>
      <LoginForm submit={onSubmit} onchange={handleChange} />
    </Col>
  )
}

export default Login
