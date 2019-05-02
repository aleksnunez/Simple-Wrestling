import React from 'react'
import styled from 'styled-components'

import logo from 'assets/logo.png'

const Image = styled.img`
  background-image: ${`url(${logo})`};
  object-fit: contain;
  width: 100%;
  height: 100%;
`
const Logo = props => <Image src={logo} />

export default Logo
