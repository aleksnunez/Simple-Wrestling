import React, {PureComponent} from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import Formatter from '../formatter.js'

const Wrapper = styled.div`
  position: absolute;

  width: 23.9em;
  height: 14em;
  left: 16em;
  top: 2em;

  background: #ffffff;
  box-shadow: 0.1em 0em #00887A;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;

  margin: 1em;

  left: 16em;
  top: 2em;
`

export default class Description extends PureComponent {
  constructor() {
    super ()

    this.state = {
      description: ''
    }
  }

  componentDidUpdate() {
    const { path } = this.props

    if (path) {
      this.fetchDescription(path)
    }
  }

  fetchDescription = path => {
    fetch(path)
    .then(res => res.json())
    .then(description => this.setState({description: description.text}))
    .catch(err => new Error(err))
  }

  render() {
    const { description } = this.state

    return (
      <StyledPlaceholder type='text' rows={4}
        ready={description ? true : false} color={'#EEEEEE'}
        style={{width: '22.9em', height: '14em'}}>
        <Wrapper>
          <Formatter text={description} />
        </Wrapper>
      </StyledPlaceholder>
    )
  }
}
