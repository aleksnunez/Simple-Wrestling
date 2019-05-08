import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import { required, isEmail } from 'util/formControl/validators'
import { updateForm, isValid, getErrors } from 'util/formControl'
import LoginForm from 'components/forms/loginForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const Login = props => {
  const [formControl, setFormControl] = useState({
    email: {validators: [required, isEmail]},
    password: {validators: [required]}
  })

  const onChange = (e) => {
    updateForm(e, formControl, setFormControl)
  }

  const isDisabled = () => {
    return !isValid(formControl)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    request({
      endpoint: '/api/login/post',
      body: JSON.stringify(formControl)
    })
      .then(res => alert(JSON.stringify(res)))
      .catch(err => new Error(err))
  }

  const errors = getErrors(formControl)

  return (
    <Col>
      <LoginForm {...{onChange, isDisabled, onSubmit, errors}} />
    </Col>
  )
}

export default Login
