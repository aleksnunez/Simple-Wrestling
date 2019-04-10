import React, { useState } from 'react'
import styled from 'styled-components'

import SearchBar from 'components/searchBar'
import Header from 'components/header'

const Wrapper = styled.section`
  position: relative;
`

const Tournaments = () => {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const body = {
      search: state.search
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return (
    <Wrapper>
      <Header text='Tournaments' />
      <SearchBar submit={onSubmit} onchange={handleChange} />
    </Wrapper>
  )
}

export default Tournaments
