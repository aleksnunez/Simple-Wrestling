import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import { required, isEmail } from 'util/formControl/validators'
import { updateForm, isValid } from 'util/formControl'
import SignupForm from 'components/forms/signupForm'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`

const SignUp = props => {
  const [formControl, setFormControl] = useState({
    name: {validators: [required], errors: []},
    email: {validators: [required, isEmail], errors: []},
    password: {validators: [required], errors: []}
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
      endpoint: '/api/signup/addCoach',
      body: JSON.stringify(formControl)
    })
      .then(res => console.log(res))
      .catch(err => new Error(err))
  }

  // looking for a way to generate programmatically
  const errors = {
    name: formControl.name.errors,
    email: formControl.email.errors,
    password: formControl.password.errors
  }

  return (
    <Col>
      <SignupForm {...{onChange, isDisabled, onSubmit, errors}} />
    </Col>
  )
}

export default SignUp
