import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import randomImg from 'util/randomImg'
import Link from './link'
import Background from './background'
import Picture from './picture'

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

  const settings = {
    type: 'rect',
    color: '#C4C4C4',
    ready: tournament_name ? true : false,
    style: {margin: '1em', width: '13em', height: '15em'},
    showLoadingAnimation: true
  }

  return (
    <ReactPlaceholder {...settings}>
      <Link to={`/tournaments/${id}`} >
        <Background background={images.background} />
        <Picture picture={images.picture} />
        <Name>{tournament_name}</Name>
        <Location>{location}</Location>
      </Link>
    </ReactPlaceholder>
  )
}

export default Tournament
