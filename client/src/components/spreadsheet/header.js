import styled from 'styled-components'

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${props => props.theme.primary.base};

  height: 2em;
  width: 100%;
`

export default Header
