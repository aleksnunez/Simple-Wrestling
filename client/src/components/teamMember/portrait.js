import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

const Image = styled.div`
  position: absolute;

  border-radius: 100%;

  width: 16em;
  height: 16em;

  background: #00887A;
  background-image: ${props =>
    props ? `url(${props.path})` : 'none'
  };
  background-size: cover;
  background-position: center;
  z-index: 500;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;

  z-index: 500;
`

const Portrait = (props) => {
  const { path } = props

  const SKELETON = {
    type: 'round',
    color: '#EEEEEE',
    ready: path ? path.includes('./team/portraits/') : false,
    style: {width: '16em', height: '16em'}
  }

  return (
    <StyledPlaceholder {...SKELETON}>
      <Image path={path} />
    </StyledPlaceholder>
  )
}

export default Portrait
