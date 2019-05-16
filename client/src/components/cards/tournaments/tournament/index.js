import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import randomImg from 'util/randomImg'
import Background from './background'
import Picture from './picture'

const Wrapper = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 0.75rem;
  color: ${props => props.theme.background.base};
  text-decoration: none;

  width: 15em;
  height: 17em;
  padding: 0.5em;
  margin: 2em;

  background: ${props => props.theme.primary.base};
  border: 1px solid ${props => props.theme.primary.base};
  border-radius: 0.2em;

  transition: ${props => props.theme.transition};

  &:hover, &:focus {
    cursor: pointer;
    color: ${props => props.theme.primary.base};
    background: ${props => props.theme.background.base};
  }

  &:active {
    text-shadow:
      -0.25px -0.25px 0 ${props => props.theme.primary.base},
      0.25px 0.25px 0 ${props => props.theme.primary.base};
  }
`
const Name = styled.p`
  font-weight: 600;
  margin: 0.75em 0;
`
const Location = styled.p`
  margin: 0.25em 0;
`

const Tournament = props => {
  const { id, tournament_name, location, picture, background } = props
  const [images, setImages] = useState({})

  useEffect(() => {
    setImages({
      picture: picture ? picture : randomImg(),
      background: background ? background : randomImg()
    })
  }, [])

  const SKELETON = {
    type: 'rect',
    color: '#C4C4C4',
    ready: tournament_name ? true : false,
    style: {margin: '1em', width: '13em', height: '15em'},
    showLoadingAnimation: true
  }

  return (
    <ReactPlaceholder {...SKELETON}>
      <Wrapper to={`/tournaments/${id}`} >
        <Background background={images.background} />
        <Picture picture={images.picture} />
        <Name>{tournament_name}</Name>
        <Location>{location}</Location>
      </Wrapper>
    </ReactPlaceholder>
  )
}

export default Tournament
