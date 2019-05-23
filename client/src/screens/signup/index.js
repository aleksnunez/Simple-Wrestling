import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import { required, isEmail } from 'util/formControl/validators'
import { updateForm, isValid, formValues, formErrors } from 'util/formControl'
import SignupForm from 'components/forms/signupForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const SignUp = props => {
  const [formControl, setFormControl] = useState({
    name: {validators: [required]},
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
      endpoint: '/api/signup/addCoach',
      body: JSON.stringify(formData)
    }, handleErrors)
      .then(res => console.log(res))
      .catch(err => new Error(err))
  }

  const handleErrors = res => {
    if (res.status === 400) {
      alert('Account already exists!')
    }
    if (res.status === 500) {
      alert(`500 ${res.statusText}`)
      return res
    }
    return res.status === 200 ? res : new Error(res)
  }

  return (
    <Col>
      <SignupForm {...{onChange, disabled, onSubmit, errors}} />
    </Col>
  )
}

export default SignUp
