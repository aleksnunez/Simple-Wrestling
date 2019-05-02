import React from 'react'
import styled from 'styled-components'

import Text from 'components/text'
import Link from 'components/link'

const StyledLink = styled(Link)`
  margin: 1em 0 0;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SignUpLink = props => {
  return (
    <Col>
      <Text>{props.prompt}</Text>
      <StyledLink to={props.to}>
        {props.children}
      </StyledLink>
    </Col>
  )
}

export default SignUpLink
