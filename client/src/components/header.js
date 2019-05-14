import React from 'react'
import styled from 'styled-components'

const Text = styled.h2`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 36px;
  text-align: center;

  color: ${props => props.theme.primary.base};
`

const Header = (props) => {
  return <Text>{props.text}</Text>
}

export default Header
