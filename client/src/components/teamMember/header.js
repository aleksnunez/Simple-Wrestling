import React, {PureComponent} from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import Name from './name.js'

const Wrapper = styled.div`
  position: absolute;

  width: 32em;
  height: 2em;
  left: 8em;

  background: #00887A;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;

  left: 8em;
`

export default class Header extends PureComponent {
  render() {
    const { name } = this.props

    return (
      <StyledPlaceholder type='text' rows={1}
        ready={name ? true : false} color={'#EEEEEE'}
        style={{width: '32em', height: '2em'}}>
        <Wrapper>
          <Name text={this.props.name} />
        </Wrapper>
      </StyledPlaceholder>
    )
  }
}
