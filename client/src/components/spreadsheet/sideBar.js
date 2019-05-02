import styled from 'styled-components'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.primary.base};

  height: 14em;
  width: 10vw;
  min-width: 5em;
  padding: 2em 0 0;
`

export default Sidebar
