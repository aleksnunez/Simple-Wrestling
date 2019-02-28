import React, {PureComponent} from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;

  margin: 1em;

  color: #333333;
`
const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
const Tab = styled.div`
  margin-left: 40px;
`

export default class Formatter extends PureComponent {
  parseTabs = line => {
    return line.split('\t').map((str, i) => {
      if (i === 0) {
        return <div key={i}>{str}</div>
      }
      else {
        return <Tab key={i}>{str}</Tab>
      }
    })
  }

  render() {
    const { text } = this.props

    const formattedText = text.split('\n').map((line, i) => {
      return <Line key={i}>{this.parseTabs(line)}<br /></Line>
    })

    return <Text>{formattedText}</Text>
  }
}
