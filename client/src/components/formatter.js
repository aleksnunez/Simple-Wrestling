import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 0.75em;
  margin: 1em;
  color: #333333;
`
const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
const Tab = styled.div`
  margin-left: 2em;
`

const Formatter = (props) => {
  const parseTabs = line => {
    return line.split('\t').map((str, i) => {
      if (i === 0) {
        return <div key={i}>{str}</div>
      }
      else {
        return <Tab key={i}>{str}</Tab>
      }
    })
  }

  const formattedText = props.text.split('\n').map((line, i) => {
    return <Line key={i}>{parseTabs(line)}<br /></Line>
  })

  return <Text>{formattedText}</Text>
}

export default Formatter
