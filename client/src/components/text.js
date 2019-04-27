import styled from 'styled-components'

const Text = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.foreground.base};

  margin: ${props => props.margin ?  props.margin : 0};
`

export default Text
