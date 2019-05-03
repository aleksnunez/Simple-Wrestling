import React from 'react'
import styled from 'styled-components'

import safeMap from 'util/safeMap'
import Link from './link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.primary.base};
  box-shadow: -0.1em 0 ${props => props.theme.primary.base} inset;

  height: auto;
  width: 10vw;
  min-width: 6em;
  padding: 2em 0;
`

const SideBar = props => {
  const { links, location } = props
  const link = (name, i) => (
      <Link key={i} to={`/${location}/${i}`}>
        {name}
      </Link>
    )

  return <Wrapper>{safeMap(links, link)}</Wrapper>
}

export default SideBar
