import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

const Image = styled.div`
  position: absolute;
  z-index: 500;

  width: 0;
  height: 0;
  padding: 20%;

  border-radius: 100%;
  background: ${props => props.theme.primary.base};
  background-image: ${props =>
    props ? `url(${props.path})` : 'none'
  };
  background-size: cover;
  background-position: center;
`

const Portrait = (props) => {
  const { path } = props

  const SKELETON = {
    type: 'round',
    color: '#C4C4C4',
    ready: path ? path.includes('./team/portraits/') : false,
    style: {
      position: 'absolute', zIndex: 500,
      width: '0', height: '0', padding: '20%'
    },
    showLoadingAnimation: true
  }

  return (
    <ReactPlaceholder {...SKELETON}>
      <Image path={path} />
    </ReactPlaceholder>
  )
}

export default Portrait
