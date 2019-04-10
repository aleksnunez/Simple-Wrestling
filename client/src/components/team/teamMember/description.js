import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import { Color } from 'styles/themes'
import Formatter from 'components/formatter'

const Wrapper = styled.div`
  position: absolute;

  width: 31.9em;
  height: 14em;
  left: 8em;
  top: 2em;

  background: ${Color.s};
  box-shadow: 0.1em -0.1em ${Color.p};
`
const Content = styled.div`
  position: relative;

  width: 23.9em;
  height: 14em;
  left: 8em;

  padding: 0;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;

  margin: 1em;

  left: 16em;
  top: 2em;
`

const Description = (props) => {
  const { path } = props
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (path) {
      fetch(path)
      .then(res => res.json())
      .then(description => setDescription(description.text))
      .catch(err => new Error(err))
    }
  }, [path])

  const SKELETON = {
    type: 'text',
    rows: 4,
    color: '#EEEEEE',
    ready: description ? true : false,
    style: {width: '21.9em', height: '14em'},
    showLoadingAnimation: true
  }

  return (
    <StyledPlaceholder {...SKELETON}>
      <Wrapper>
        <Content>
          <Formatter text={description} cutoff={8}/>
        </Content>
      </Wrapper>
    </StyledPlaceholder>
  )
}

export default Description
