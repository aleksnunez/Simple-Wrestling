const foreground = {base: '#333333', active: '#828282'}
const background = {base: '#ffffff', active: '#828282'}
const neutral = {base: '#828282', active: '#333333'}
const primary = {base: '#1D2951', active: '#4C516D'}

const light = {
  foreground: {...foreground},
  background: {...background},
  neutral: {...neutral},
  primary: {...primary}
}

const dark = {
  foreground: {...background},
  background: {...foreground},
  neutral: {...neutral},
  primary: {...background}
}

export { light, dark }
