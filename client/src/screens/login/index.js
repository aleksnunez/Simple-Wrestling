import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import { required, isEmail } from 'util/formControl/validators'
import { updateForm, isValid, formValues, formErrors } from 'util/formControl'
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
  const formData = formValues(formControl)
  const disabled = !isValid(formControl)
  const errors = formErrors(formControl)

  const onChange = (e) => updateForm(e, formControl, setFormControl)

  const onSubmit = (e) => {
    e.preventDefault()

    request({
      endpoint: '/api/login',
      body: JSON.stringify(formData)
    }, handleErrors)
      .then(res => storeAuthToken(res))
      .catch(err => new Error(err))
  }

  const handleErrors = res => {
    if (res.status === 400) {
      alert('Auth failed!')
    }
    return res.status === 200 ? res : new Error(res)
  }

  const storeAuthToken = token =>
    localStorage.setItem('authToken', token)

  return (
    <Col>
      <LoginForm {...{onChange, disabled, onSubmit, errors}} />
    </Col>
  )
}

export default Login
