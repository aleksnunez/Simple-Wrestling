import React from 'react'
import styled from 'styled-components'
import Text from 'components/text'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.primary.base};

  height: 2em;
  width: 100%;
  min-width: 6em;
`
const Title = styled(Text)`
  color: ${props => props.theme.background.base};

  margin: 0.5em 0;
`

const Header = props => {
  return (
    <Wrapper>
      <Title>
        {props.title}
      </Title>
    </Wrapper>
  )
}

export default Header
