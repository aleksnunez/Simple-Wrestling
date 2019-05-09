export default class FormGroup {
  constructor(form, setForm) {
    const inputs = (acc, input) =>
      ({...acc, [input[0]]: new FormControl(input[1])})
    this.inputs = Object.entries(form).reduce(inputs, {})
    this.setForm = setForm
  }

  update(e) {
    const { name, value } = e.target
    this.inputs[name].validate(value)
    this.setForm(this.errors())
  }

  isValid() {
    const isReady = input => input.ready
    return Object.values(this.inputs).every(isReady)
  }

  errors() {
    const errors = (acc, input) => ({...acc, [input[0]]: input[1].errors})
    return Object.entries(this.inputs).reduce(errors, {})
  }

  values() {
    const values = (acc, input) => ({...acc, [input[0]]: input[1].value})
    return Object.entries(this.inputs).reduce(values, {})
  }
}

class FormControl {
  constructor(input) {
    const { validators, errors, value, ready } = input
    this.validators = Array.isArray(validators) ? validators : []
    this.errors = Array.isArray(errors) ? errors : []
    this.value = value ? value : ''
    this.ready = ready ? true : false
  }

  validate(value) {
    const invalid = validator => !validator.check(value)
    const errors = this.validators
      .filter(invalid)
      .map(validator => validator.details)
    this.errors = errors
    this.value = value
    this.ready = errors.length === 0
  }
}
