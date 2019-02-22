import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Paragraph from '../paragraph.js'

const Wrapper = styled.div`
  position: absolute;

  width: 23.9em;
  height: 14em;
  left: 16em;
  top: 2em;

  background: #ffffff;
  box-shadow: 0.1em 0em #00887A;
`

export default class Description extends PureComponent {
  constructor() {
    super ()

    this.state = {
      description: ''
    }
  }

  componentDidMount() {
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
      <Wrapper>
        <Paragraph text={description} />
      </Wrapper>
    )
  }
}
