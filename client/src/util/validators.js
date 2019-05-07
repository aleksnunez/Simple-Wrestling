const required = input => {
  return input ? true : false
}

const isEmail = input => {
  if (input) {
    if (input.includes('@')) {
      return true
    }
  }
  return false
}

export { required, isEmail }
