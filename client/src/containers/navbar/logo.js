import styled from 'styled-components'

const Logo = styled.div`
  &::after {
    content: ${props => `url(${props.theme.logo})`};
  }
`

export default Logo
