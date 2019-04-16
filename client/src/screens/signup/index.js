import React, { useState } from 'react'
import styled from 'styled-components'

import SignupForm from 'components/forms/signupForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const SignUp = () => {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const body = {
      email: state.email,
      password: state.password
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return (
    <Col>
      <SignupForm submit={onSubmit} onchange={handleChange} />
    </Col>
  )
}

export default SignUp
