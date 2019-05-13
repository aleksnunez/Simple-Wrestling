import React from 'react'

import Link from 'components/link'
import { FormWrapper, ValidatedInput, Button } from '../'

const Form = (props) => {
  const { onChange, disabled, onSubmit, errors } = props
  return (
    <FormWrapper>
      <ValidatedInput autoFocus required
        type='email' name='email'
        onChange={onChange} errors={errors.email} />
      <ValidatedInput required autoComplete='off'
        type='password' name='password'
        onChange={onChange} errors={errors.password} />
      <Button disabled={disabled} onClick={onSubmit}>
        Login
      </Button>
      <Link to='/forgot'>
        Forgot Password
      </Link>
    </FormWrapper>
  )
}

export default Form
