import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import randomImg from 'util/randomImg'
import Button from 'components/button'
import Background from './background'
import Picture from './picture'

const Wrapper = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${props => props.theme.background.base};

  width: 15em;
  height: 17em;
  padding: 0.5em;
  margin: 2em;
`
const Name = styled.p`
  font-weight: 600;
  margin: 0.75em 0;
`
const Location = styled.p`
  margin: 0.25em 0;
`

const Tournament = props => {
  const { tournament_name, location, picture, background } = props
  const SKELETON = {
    type: 'rect',
    color: '#C4C4C4',
    ready: tournament_name ? true : false,
    style: {margin: '1em', width: '13em', height: '15em'},
    showLoadingAnimation: true
  }

  return (
    <ReactPlaceholder {...SKELETON}>
      <Wrapper>
        <Background background={background ? background : randomImg()} />
        <Picture picture={picture ? picture : randomImg()} />
        <Name>{tournament_name}</Name>
        <Location>{location}</Location>
      </Wrapper>
    </ReactPlaceholder>
  )
}

export default Tournament
