const required = input => {
  if (input) {
    return true
  }
  return false
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
