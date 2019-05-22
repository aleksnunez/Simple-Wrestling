import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 50vw;
`

const Label = props => {
  const { request } = props
  return (
    <Wrapper>
      {JSON.stringify(request)}
    </Wrapper>
  )
}

export default Label
