const validateForm = formControl => {
  const formErrors = Object.values(formControl)
    .map(validateInput)
    .filter(inputError => inputError.length > 0)
  return formErrors
}

const validateInput = input => {
  const invalid = validator => !validator.check(input.value)
  const inputErrors = input.validators
    .filter(invalid)
    .map(validator => validator.details)
  return inputErrors
}

const updateForm = (e, formControl, setFormControl) => {
  const { name, value } = e.target
  const input = {...formControl[name], ...{value}}
  const errors = validateInput(input)

  setFormControl({
    ...formControl,
    [name]: {
      ...input,
      errors: errors,
      ready: errors.length === 0
    }
  })
}

const isValid = formControl => {
  const isReady = input => input.ready
  return Object.values(formControl).every(isReady)
}

const getErrors = formControl => {
  const reducer = (acc, input) => ({...acc, [input[0]]: input[1].errors})
  return Object.entries(formControl).reduce(reducer, {})
}

export { validateForm, validateInput, updateForm, isValid, getErrors }
