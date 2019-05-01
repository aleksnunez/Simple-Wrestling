import styled from 'styled-components'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: ${props => props.theme.primary.base};

  height: 14em;
  min-width: 4em;
  width: 10vw;
`

export default Sidebar
