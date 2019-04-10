import React from 'react'
import styled from 'styled-components'

import Text from 'components/text'
import StyledLink from 'components/link'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginLink = () => {
  return (
    <Col>
      <Text>Already Have an Account?</Text>
      <StyledLink to='/login' color='#828282' margin='1em 0 0'>
        Login here
      </StyledLink>
    </Col>
  )
}

export default LoginLink
