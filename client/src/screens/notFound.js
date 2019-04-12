import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'

const Wrapper = styled.section`
  position: relative;
`

const NotFound = () => {
  return (
    <Wrapper>
      <Header text={'404'} />
    </Wrapper>
  )
}

export default NotFound
