import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import { ReactComponent as GitHub } from 'assets/github.svg'

const StyledGitHub = styled(GitHub)`
  position: absolute;
  left: 100%;

  width: 2em;
  height: 2em;
  margin: 0.5em;
`
const StyledLink = styled.a`
  border-radius: 100%;
`

const Social = (props) => {
  const { github } = props

  const SKELETON = {
    type: 'round',
    color: '#C4C4C4',
    ready: github ? github.includes('https://github.com/') : false,
    style: {width: '2em', height: '2em'},
    showLoadingAnimation: true
  }

  return (
    <ReactPlaceholder {...SKELETON}>
      <StyledLink href={github} target='_blank'><StyledGitHub /></StyledLink>
    </ReactPlaceholder>
  )
}

export default Social
