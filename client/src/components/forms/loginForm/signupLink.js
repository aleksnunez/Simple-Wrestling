import React from 'react'
import styled from 'styled-components'

import Text from 'components/text'
import Link from 'components/link'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SignUpLink = () => {
  return (
    <Col>
      <Text>Don't Have an Account?</Text>
      <Link to='/signup' color='#828282' margin='1em 0 0'>
        Sign up here
      </Link>
    </Col>
  )
}

export default SignUpLink
