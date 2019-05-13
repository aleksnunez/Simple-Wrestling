import React, { useState } from 'react'
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

  const handleChange = (e) => {
    setSearchBar({
      ...searchBar,
      search: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    request({
      endpoint: `api/tournaments/search`,
      body: JSON.stringify(searchBar)
    })
    .then(res => alert(JSON.stringify(res)))
    .catch(err => new Error(err))
  }

  return (
    <Wrapper>
      <Header text='Tournaments' />
      <SearchBar submit={onSubmit} onchange={handleChange}>
        search for a tournament...
      </SearchBar>
      <TournamentCards />
    </Wrapper>
  )
}

export default Search
