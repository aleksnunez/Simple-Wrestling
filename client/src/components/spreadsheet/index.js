import styled from 'styled-components'

import Header from './header'
import SideBar from './sideBar'
import Table from './table'
import CellRow from './cellRow'

const Wrapper = styled.form`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 1em 5vw;
`

export { Wrapper, Header, SideBar, Table, CellRow }
