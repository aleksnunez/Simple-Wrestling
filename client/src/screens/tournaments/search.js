import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import SearchBar from 'components/searchBar'
import Header from 'components/header'
import TournamentCards from 'components/cards/tournaments'

const Wrapper = styled.section`
  position: relative;
`

const Search = props => {
  const [searchBar, setSearchBar] = useState({})
  const [tournaments, setTournaments] = useState([{}])

  const handleChange = (e) => {
    setSearchBar({
      ...searchBar,
      search: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { search } = searchBar
    request({
      endpoint: `api/tournaments/${search ? search : ''}`,
      method: 'GET'
    })
      .then(res => setTournaments([...res]))
      .catch(err => new Error(err))
  }

  useEffect(() => {
    request({endpoint: 'api/tournaments', method: 'GET'})
      .then(res => setTournaments([...res]))
      .catch(err => new Error(err))
  }, [])

  return (
    <Wrapper>
      <Header text='Tournaments' />
      <SearchBar submit={onSubmit} onchange={handleChange}>
        search for a tournament...
      </SearchBar>
      <TournamentCards tournaments={tournaments} />
    </Wrapper>
  )
}

export default Search
