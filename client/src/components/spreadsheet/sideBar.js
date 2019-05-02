import styled from 'styled-components'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.primary.base};

  height: auto;
  width: 10vw;
  min-width: 5em;
  padding: 2em 0;
`

export default Sidebar
