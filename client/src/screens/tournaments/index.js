import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import SearchBar from 'components/searchBar'
import Header from 'components/header'
import TournamentCards from 'components/cards/tournaments'

const Wrapper = styled.section`
  position: relative;
`

const Tournaments = props => {
  const [state, setState] = useState({})
  const [data, setData] = useState()

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    request({
      endpoint: 'https://jsonplaceholder.typicode.com/posts',
      body: JSON.stringify(state)
    })
    .then(res => alert(JSON.stringify(res)))
    .catch(err => new Error(err))
  }

  useEffect(() => {
    request({
      endpoint: 'https://my-json-server.typicode.com/swabisan/demo/Tournaments',
      method: 'GET'
    })
    .then(res => setData(res))
    .catch(err => new Error(err))
  }, [])

  return (
    <Wrapper>
      <Header text='Tournaments' />
      <SearchBar submit={onSubmit} onchange={handleChange} />
      <TournamentCards tournaments={data}/>
    </Wrapper>
  )
}

export default Tournaments
