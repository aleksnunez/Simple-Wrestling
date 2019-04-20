import React, { useState, useEffect } from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import Formatter from 'components/formatter'

const Wrapper = styled.div`
  position: absolute;
  left: 40%;
  top: 2em;

  width: 60%;
  height: 14em;

  box-shadow: -0.1em 0 ${props => props.theme.primary.base} inset;
`
const StyledPlaceholder = styled(ReactPlaceholder)`
  position: absolute;

  margin: 2em;

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
    style: {width: '50%', height: '14em'},
    showLoadingAnimation: true
  }

  return (
    <StyledPlaceholder {...SKELETON}>
      <Wrapper>
        <Formatter text={description} cutoff={8}/>
      </Wrapper>
    </StyledPlaceholder>
  )
}

export default Description
