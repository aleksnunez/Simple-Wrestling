import styled from 'styled-components'

const Cell = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 3em;
  width: 15vw;
  min-width: 6rem;

  background: ${props => props.theme.background.base};
  border-top: 1px solid ${props => props.theme.background.base};
  border-left: 1px solid ${props => props.theme.background.base};
  border-bottom: 1px solid ${props => props.theme.primary.active};
  border-right: 1px solid ${props => props.theme.primary.active};
  border-radius: 0;

  color: ${props => props.theme.foreground.base};
  font-size: 0.8rem;
`

export default Cell
