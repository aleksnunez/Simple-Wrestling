const required = {
  check: input => input && input !== '',
  details: '* field is required'
}

const isEmail = {
  check: input => input && input.includes('@'),
  details: 'not an email address'
}

export { required, isEmail }
