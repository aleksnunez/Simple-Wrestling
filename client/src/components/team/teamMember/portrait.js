import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

const Image = styled.div`
  position: absolute;
  z-index: 500;

  width: 16em;
  height: 16em;

  border-radius: 100%;
  background: ${props => props.theme.primary.base};
  background-image: ${props =>
    props ? `url(${props.path})` : 'none'
  };
  background-size: cover;
  background-position: center;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;
  z-index: 500;
`

const Portrait = (props) => {
  const { path } = props

  const SKELETON = {
    type: 'round',
    color: '#C4C4C4',
    ready: path ? path.includes('./team/portraits/') : false,
    style: {width: '16em', height: '16em'},
    showLoadingAnimation: true
  }

  return (
    <StyledPlaceholder {...SKELETON}>
      <Image path={path} />
    </StyledPlaceholder>
  )
}

export default Portrait
