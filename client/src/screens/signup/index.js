import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'

const Wrapper = styled.section`
  position: relative;
`

const SignUp = () => {
  return (
    <Wrapper>
      <Header text={'SignUp'} />
    </Wrapper>
  )
}

export default SignUp
