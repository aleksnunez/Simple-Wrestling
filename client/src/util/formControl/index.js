export const validateForm = formControl => {
  const formErrors = Object.values(formControl)
    .map(validateInput)
    .filter(inputError => inputError.length > 0)
  return formErrors
}

export const validateInput = input => {
  const invalid = validator => !validator.check(input.value)
  const inputErrors = input.validators
    .filter(invalid)
    .map(validator => validator.details)
  return inputErrors
}

export const updateForm = (e, formControl, setFormControl) => {
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

export const isValid = formControl => {
  const isReady = input => input.ready
  return Object.values(formControl).every(isReady)
}

const errors = (acc, input) => ({...acc, [input[0]]: input[1].errors})
const values = (acc, input) => ({...acc, [input[0]]: input[1].value})

export const getErrors = (formControl) =>
  Object.entries(formControl).reduce(errors, {})

export const getValues = (formControl) =>
  Object.entries(formControl).reduce(values, {})
