import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import { Color } from 'styles/themes'
import Name from './name'

const Wrapper = styled.div`
  position: absolute;

  width: 32em;
  height: 2em;
  left: 8em;

  background: ${Color.p};
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
    color: '#C4C4C4',
    ready: name ? true : false,
    style: {left: '16em', width: '24em', height: '2em'},
    showLoadingAnimation: true
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
