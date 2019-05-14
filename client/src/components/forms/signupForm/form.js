import React from 'react'

import Link from 'components/link'
import { FormWrapper, ValidatedInput, Button } from '../'

const Form = (props) => {
  const { onChange, disabled, onSubmit, errors } = props
  return (
    <FormWrapper>
      <ValidatedInput autoFocus required
        type='text' name='name'
        onChange={onChange} errors={errors.name} />
      <ValidatedInput required
        type='email' name='email'
        onChange={onChange} errors={errors.email} />
      <ValidatedInput required
        type='password' name='password'
        onChange={onChange} errors={errors.password} />
      <Button disabled={disabled} onClick={onSubmit}>
        Sign Up
      </Button>
    
    </FormWrapper>
  )
}

export default Form
