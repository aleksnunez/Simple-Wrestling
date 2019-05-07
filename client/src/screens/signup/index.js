import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import { required, isEmail } from 'util/validators'
import { validateInput} from 'util/validate'
import SignupForm from 'components/forms/signupForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const SignUp = props => {
  const [state, setState] = useState({
    name: {id: "name", validators: [required], ready: false},
    email: {id: "email", validators: [required, isEmail], ready: false},
    password: {id: "password", validators: [required], ready: false}
  })

  const change = (e) => {
    const { name, value} = e.target
    const input = {
      ...state[name],
      ...{value}
    }
    setState({
      ...state,
      [name]: {
        ...input,
        ready: validateInput(input).errors.length === 0
      }
    })

  }

  // make better
  const isValid = () => {
    const name = state.name.ready
    const email = state.email.ready
    const password = state.password.ready
    return name && email && password
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
