import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 0.75em;
  margin: 1em;
  color: ${props => props.theme.foreground.base};
`
const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 2em;
`
const Tab = styled.div`
  margin-left: 2em;
`

const parseTabs = line => {
  return line.split('\t').map((str, i) => {
    if (i === 0) {
      return <div key={i}>{str}</div>
    }
    return <Tab key={i}>{str}</Tab>
  })
}

const Formatter = (props) => {
  const cutoff = props.cutoff ? props.cutoff : Infinity
  const text = props.text.split('\n').filter(str => str).splice(0, cutoff)

  const formattedText = text.map((line, i) => {
    if (i === cutoff - 1) {
      line = `${line}...`
    }
    return <Line key={i}>{parseTabs(line)}<br /></Line>
  })

  return <Text>{formattedText}</Text>
}

export default Formatter
