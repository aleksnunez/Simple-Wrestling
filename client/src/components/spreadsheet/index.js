import styled from 'styled-components'

import Header from './header'
import Sidebar from './sidebar'
import Table from './table'
import Cell from './cell'

const Wrapper = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export { Wrapper, Header, Sidebar, Table, Cell }
