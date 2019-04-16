import styled from 'styled-components'

const Text = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1em;
  color: ${props => props.theme.foreground.base};

  margin: ${props => props.margin ?  props.margin : 0};
`

export default Text
