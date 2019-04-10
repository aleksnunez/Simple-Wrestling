import Link from 'components/link'
import styled from 'styled-components'

const NavLink = styled(Link)`
  padding: 0 1em;

  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 1.25em;
  text-align: center;
  text-decoration: none;

  &:link, &:visited {
    color: #333333;
  }

  &:hover, &:active {
    color: #828282;
  }
`

export default NavLink
