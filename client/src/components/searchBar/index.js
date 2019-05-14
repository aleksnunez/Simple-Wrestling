import React from 'react'
import styled from 'styled-components'

import { Input } from 'components/forms'
import Button from './button'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;

  margin: 0.5em;
  width: 85vw;
  max-width: 40em;
`
const StyledInput = styled(Input)`
  height: 2.5em;
  width: 75%;
`

const SearchBar = props => {
  return (
    <Col>
      <Form>
        <StyledInput
          name='search'
          onChange={props.onchange}
          placeholder={props.children} />
        <Button onClick={props.submit}>Search</Button>
      </Form>
    </Col>
  )
}

export default SearchBar
