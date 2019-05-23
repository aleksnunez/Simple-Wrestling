import React from 'react'
import Loader from 'react-loader-spinner'
import styled, { withTheme } from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  left: calc(50vw - 50px);
  top: 40vh;
`

const Spinner = props => {
  const { theme } = props
  return (
    <Wrapper>
      <Loader type='Oval'
        color={`${theme ? theme.neutral.base : 'black'}`}
        width={100} height={100} />
    </Wrapper>
  )
}

export default withTheme(Spinner)
