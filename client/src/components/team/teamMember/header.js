import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import Name from './name'

const Wrapper = styled.div`
  position: absolute;
  left: 20%;

  width: 80%;
  height: 2em;

  background: ${props => props.theme.primary.base};
`

const Header = (props) => {
  const { name } = props

  const SKELETON = {
    type: 'text',
    rows: 1,
    color: '#C4C4C4',
    ready: name ? true : false,
    style: {
      position: 'absolute', left: '40%', 
      width: '60%', height: '2em'
    },
    showLoadingAnimation: true
  }

  return (
    <ReactPlaceholder {...SKELETON}>
      <Wrapper>
        <Name>{name}</Name>
      </Wrapper>
    </ReactPlaceholder>
  )
}

export default Header
