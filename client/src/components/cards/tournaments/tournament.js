import React from 'react'
import styled from 'styled-components'

import Text from 'components/text'
import { Wrapper, Background, Picture } from '../'

const StyledText = styled(Text)`
  font-weight: 600;
  margin: 0.75em 0;
  color: ${props => props.theme.background.base};
`

const Tournament = props => {
  const { name, picture, background } = props
  return (
    <Wrapper>
      <Background background={background} />
      <Picture picture={picture} />
      <StyledText>{name}</StyledText>
    </Wrapper>
  )
}

export default Tournament
