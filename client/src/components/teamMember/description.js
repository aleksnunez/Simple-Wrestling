import React, { Component } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import Formatter from '../formatter'

const Wrapper = styled.div`
  position: absolute;

  width: 23.9em;
  height: 14em;
  left: 16em;
  top: 2em;

  background: #ffffff;
  box-shadow: 0.1em -0.1em #00887A;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;

  margin: 1em;

  left: 16em;
  top: 2em;
`

export default class Description extends Component {
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

    const SKELETON = {
      type: 'text',
      rows: 4,
      color: '#EEEEEE',
      ready: description ? true : false,
      style: {width: '22.9em', height: '14em'}
    }

    return (
      <StyledPlaceholder {...SKELETON}>
        <Wrapper>
          <Formatter text={description} />
        </Wrapper>
      </StyledPlaceholder>
    )
  }
}
