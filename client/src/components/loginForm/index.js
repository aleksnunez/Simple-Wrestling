import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import { ReactComponent as Logo } from 'assets/yoga-baby.svg'

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormWrapper = styled.div`
  border-top: 0.5em solid #00887A;
  background: #fff;

  top: 10em;
  width: 30em;

  padding: 2em 0.1em;
`


const LoginForm = (props) => {
  return (
    <Col>
      <FormWrapper>
        <Col>
          <Header text='Login' />
        </Col>
      </FormWrapper>
    </Col>
  )
}

export default LoginForm
