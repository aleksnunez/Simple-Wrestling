const required = {
  check: input => input && input !== '',
  details: '* field is required'
}

// replace check with a real validation function
const isEmail = {
  check: input => input && input.includes('@'),
  details: 'not an email address'
}

export { required, isEmail }
