import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Text from 'components/text'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NotFound = props => {
  return (
    <Wrapper>
      <Header text={`:( This page doesn't exist!`} />
      <Text>Error code 404</Text>
    </Wrapper>
  )
}

export default NotFound
