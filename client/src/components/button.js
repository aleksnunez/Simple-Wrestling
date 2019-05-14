import styled from 'styled-components'

const Button = styled.button`
  color: ${props => props.theme.background.base};

  background: ${props => props.theme.primary.base};
  border: 0.05em solid ${props => props.theme.primary.base};
  border-radius: 0.2em;

  transition: ${props => props.theme.transition};

  &:hover, &:focus {
    background: ${props => props.theme.background.base};
    color: ${props => props.theme.primary.base};
    cursor: pointer;
  }

  &:active {
    border: 0.1em solid ${props => props.theme.primary.base};
    text-shadow:
    -0.25px -0.25px 0 ${props => props.theme.primary.base},
    0.25px 0.25px 0 ${props => props.theme.primary.base};
  }

  &:disabled {
    border: 0.05em solid ${props => props.theme.neutral.active};
    background: ${props => props.theme.neutral.active};
    color: ${props => props.theme.neutral.base};
    cursor: default;
  }
`

export default Button
