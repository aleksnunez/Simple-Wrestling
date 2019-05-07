import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import { required, isEmail } from 'util/validators'
import SignupForm from 'components/forms/signupForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const SignUp = props => {
  const [state, setState] = useState({
    name: {id: "name", validators: [required]},
    email: {id: "email", validators: [required, isEmail]},
    password: {id: "password", validators: [required]}
  })

  const change = (e) => {
    setState({
      ...state,
      [e.target.name]: {
        ...state[e.target.name],
        value: e.target.value,
      }
    })
  }

  const isValid = () => {
    const errors = Object.values(state).filter(field =>
      field.validators.reduce((acc, validator) =>
        !validator(field.value), false)
      )
    return errors.length === 0
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
