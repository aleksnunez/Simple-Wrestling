import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import Name from './name.js'

const Wrapper = styled.div`
  position: absolute;

  width: 32em;
  height: 2em;
  left: 8em;

  background: #00887A;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;

  left: 8em;
`

const Header = (props) => {
  const { name } = props

  const SKELETON = {
    type: 'text',
    rows: 1,
    color: '#EEEEEE',
    ready: name ? true : false,
    style: {width: '32em', height: '2em'}
  }

  return (
    <StyledPlaceholder {...SKELETON}>
      <Wrapper>
        <Name text={name} />
      </Wrapper>
    </StyledPlaceholder>
  )
}

export default Header
