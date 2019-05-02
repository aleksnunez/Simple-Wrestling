const foreground = {base: '#333333', active: '#828282'}
const background = {base: '#ffffff', active: '#828282'}
const neutral = {base: '#828282', active: '#333333'}
const primary = {base: '#1D2951', active: '#4C516D'}
const transition = 'background 0.25s, color 0.25s, text-decoration-color 0.25s'

const light = {
  foreground: {...foreground},
  background: {...background},
  neutral: {...neutral},
  primary: {...primary},
  transition
}

const dark = {
  foreground: {...background},
  background: {...foreground},
  neutral: {...neutral},
  primary: {...background},
  transition
}

export { light, dark }
