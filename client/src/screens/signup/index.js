import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import { required, isEmail } from 'util/formControl/validators'
import { updateForm, isValid, getErrors } from 'util/formControl'
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

  const onChange = (e) => {
    updateForm(e, formControl, setFormControl)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    request({
      endpoint: '/api/signup/addCoach',
      body: JSON.stringify(formControl)
    })
      .then(res => console.log(res))
      .catch(err => new Error(err))
  }

  const disabled = !isValid(formControl)
  const errors = getErrors(formControl)

  return (
    <Col>
      <SignupForm {...{onChange, disabled, onSubmit, errors}} />
    </Col>
  )
}

export default SignUp
