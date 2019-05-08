import React from 'react'

import Link from 'components/link'
import { FormWrapper, FormInput, Button } from '../'

const Form = (props) => {
  const { onChange, isDisabled, onSubmit, errors } = props
  return (
    <FormWrapper>
      <FormInput autoFocus required
        type='email' name='email'
        onChange={onChange} errors={errors.email} />
      <FormInput required autoComplete='off'
        type='password' name='password'
        onChange={onChange} errors={errors.password} />
      <Button disabled={isDisabled()} onClick={onSubmit}>
        Login
      </Button>
      <Link to='/forgot'>
        Forgot Password
      </Link>
    </FormWrapper>
  )
}

export default Form
