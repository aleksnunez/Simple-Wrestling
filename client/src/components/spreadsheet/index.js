import styled from 'styled-components'

import SideBar from './sideBar'
import Table from './table'

const Wrapper = styled.form`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 1em 5vw;
`

export { Wrapper, SideBar, Table }
