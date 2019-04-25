import styled from 'styled-components'

const Background = styled.div`
  position: absolute;

  background: #F4F4F4;
  background-image: ${props =>
    props.background ? `url(${props.background})` : 'none'};

  width: 14em;
  height: 10em;
`

export default Background
