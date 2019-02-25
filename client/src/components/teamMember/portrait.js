import React, {PureComponent} from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

const Image = styled.div`
  position: absolute;

  border-radius: 100%;

  width: 16em;
  height: 16em;

  background: #00887A;
  background-image: none;
  background-size: cover;
  background-position: center;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;

  z-index: 500;
`

export default class Portrait extends PureComponent {
  render() {
    const { path } = this.props

    const SKELETON = {
      type: 'round',
      color: '#EEEEEE',
      ready: path ? path.includes('./team/portraits/') : false,
      style: {width: '16em', height: '16em'}
    }

    return (
      <StyledPlaceholder {...SKELETON}>
        <Image style={{backgroundImage: `url(${path})`}}/>
      </StyledPlaceholder>
    )
  }
}
