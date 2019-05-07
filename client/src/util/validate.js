const validateForm = state => {
  const errors = Object.values(state).map(validateInput)
    .filter(inputError => inputError.errors.length > 0)
  return errors
}

const validateInput = input => {
  const invalid = validator => !validator(input.value)
  return input.validators.filter(invalid)
}

const updateForm = (e, state, setState) => {
  const { name, value } = e.target
  const input = {...state[name], ...{value}}
  const errors = validateInput(input)

  setState({
    ...state,
    [name]: {
      ...input,
      errors: errors,
      ready: errors.length === 0
    }
  })
}

const isValid = state => Object.values(state).every(input => input.ready)

export { validateForm, validateInput, updateForm, isValid }
