import React from 'react'
import styled from 'styled-components'

import Button from './button'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper = styled.div`
  margin: 0.5em;
`
const Input = styled.input`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: lighter;
  font-size: 1em;

  height: 2.5em;
  width: 20em;
  padding-left: 0.5em;

  box-sizing: border-box;
  border: 1px solid #C4C4C4;

  &:focus {
    outline: none !important;
    border: 1px solid #888888;
  }
`

const SearchBar = (props) => {
  return (
    <Col>
      <Wrapper>
        <Input name='search' onChange={props.onchange} />
        <Button onClick={props.submit}>Search</Button>
      </Wrapper>
    </Col>
  )
}

export default SearchBar
