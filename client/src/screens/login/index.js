import React, { useState } from 'react'
import styled from 'styled-components'

import LoginForm from 'components/forms/loginForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const Login = () => {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    fetch('/api/login/post', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return (
    <Col>
      <LoginForm submit={onSubmit} onchange={handleChange} />
    </Col>
  )
}

export default Login
