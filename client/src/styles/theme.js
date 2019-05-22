import logo from 'assets/logo.png'
import logoInverted from 'assets/logo-white.png'

const foreground = {base: '#333333', active: '#828282'}
const background = {base: '#ffffff', active: '#828282'}
const neutral = {base: '#828282', active: '#333333'}
const primary = {base: '#1D2951', active: '#4C516D'}
const transition = 'all 0.25s'
const signal = {danger: 'red', success: 'green'}

const light = {
  logo: logo,
  foreground: {...foreground},
  background: {...background},
  neutral: {...neutral},
  primary: {...primary},
  signal,
  transition
}

const dark = {
  logo: logoInverted,
  foreground: {...background},
  background: {...foreground},
  neutral: {...neutral},
  primary: {...background},
  signal,
  transition
}

export { light, dark }
