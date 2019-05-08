import React from 'react'
import styled from 'styled-components'

import safeMap from 'util/safeMap'
import uppercaseFirst from 'util/uppercaseFirst'
import Text from 'components/text'

const InputWrapper = styled.div`
  padding: 1em 0;
  width: 100%;
`
const Input = styled.input`
  font-weight: lighter;
  font-size: 1em;

  height: 3em;
  width: 100%;
  padding-left: 2.5%;

  box-sizing: border-box;
  border: 1px solid ${props =>
    props.errors &&
    props.errors.length > 0 ? props.theme.error : props.theme.neutral.base
  };

  &:focus {
    outline: none !important;
    border: 1px solid ${props =>
      props.errors &&
      props.errors.length > 0 ? props.theme.error : props.theme.neutral.active
    };
  }
`
const ErrorMessage = styled(Text)`
  color: ${props => props.theme.error};
  font-weight: lighter;
  font-size: 0.75em;
`

const ValidatedInput = props => {
  const { name, required, errors } = props
  const error = (detail, i) =>
    <ErrorMessage key={i}>{detail}</ErrorMessage>
  return (
    <InputWrapper>
      <Text margin='0 0 0.5em'>
        {`${uppercaseFirst(name)}${required ? '*' : ''}`}
      </Text>
      <Input {...props} />
      {safeMap(errors, error)}
    </InputWrapper>
  )
}

export { InputWrapper, ValidatedInput, Input }
