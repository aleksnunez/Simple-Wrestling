import styled from 'styled-components'

import Header from './header'
import SideBar from './sideBar'
import Link from './link'
import Table from './table'
import Cell from './cell'

const Wrapper = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1em 5vw;
`

export { Wrapper, Header, SideBar, Link, Table, Cell }
