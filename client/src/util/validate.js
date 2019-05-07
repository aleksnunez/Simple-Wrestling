const validateForm = state => {
  const errors = Object.values(state).map(validateInput)
    .filter(inputError => inputError.errors.length > 0)
  // console.log(errors)
  return errors
}

const validateInput = input => {
  const invalid = validator => !validator(input.value)
  return {
    id: input.id,
    errors: input.validators.filter(invalid)
  }
}

export { validateForm, validateInput }
