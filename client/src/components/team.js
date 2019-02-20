import React, { Component } from 'react'
import styled from 'styled-components'

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class Team extends Component {
  render() {
    return (
      <Col>
        <p>person</p>
        <p>person</p>
        <p>person</p>
        <p>person</p>
        <p>person</p>
        <p>person</p>
      </Col>
    )
  }
}
