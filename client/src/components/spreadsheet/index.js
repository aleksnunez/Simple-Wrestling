import styled from 'styled-components'

import Header from './header'
import SideBar from './sideBar'
import SideButton from './sideButton'
import Table from './table'
import Cell from './cell'

const Wrapper = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export { Wrapper, Header, SideBar, SideButton, Table, Cell }
