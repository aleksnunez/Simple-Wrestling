import styled from 'styled-components'

const Picture = styled.div`
  position: relative;

  background: #C4C4C4;
  background-image: ${props =>
    props.picture ? `url(${props.picture})` : 'none'};
  border-radius: 100%;
  border: 0.1em solid ${props => props.theme.background.base};

  width: 6em;
  height: 6em;
  margin: 5em 5em 0 5em;
`

export default Picture
