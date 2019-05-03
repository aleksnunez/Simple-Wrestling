import styled from 'styled-components'

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.primary.base};
  box-shadow: -0.1em 0 ${props => props.theme.primary.base} inset;

  height: auto;
  width: 10vw;
  min-width: 6em;
  padding: 2em 0;
`

export default Sidebar
