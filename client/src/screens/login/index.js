import React, { useState } from "react";
import styled from "styled-components";
import request from "api";

<<<<<<< HEAD
import LoginForm from "components/forms/loginForm";
=======
import { required, isEmail } from 'util/formControl/validators'
import { updateForm, isValid } from 'util/formControl'
import LoginForm from 'components/forms/loginForm'
>>>>>>> 5f968c153fa3153a40ad31913ede18e957f9e4c7

const Col = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
`;

const Login = props => {
<<<<<<< HEAD
  const [state, setState] = useState({});

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
=======
  const [formControl, setFormControl] = useState({
    email: {validators: [required, isEmail]},
    password: {validators: [required]}
  })

  const onChange = (e) => {
    updateForm(e, formControl, setFormControl)
  }

  const isDisabled = () => {
    return !isValid(formControl)
  }
>>>>>>> 5f968c153fa3153a40ad31913ede18e957f9e4c7

  const onSubmit = e => {
    e.preventDefault();

<<<<<<< HEAD
    request({ endpoint: "/api/login/", body: JSON.stringify(state) })
      .then(res => alert(JSON.stringify(res)))
      .catch(err => new Error(err));
  };
=======
    request({
      endpoint: '/api/login/post',
      body: JSON.stringify(formControl)
    })
      .then(res => alert(JSON.stringify(res)))
      .catch(err => new Error(err))
  }

  // looking for a way to generate programmatically
  const errors = {
    email: formControl.email.errors,
    password: formControl.password.errors
  }
>>>>>>> 5f968c153fa3153a40ad31913ede18e957f9e4c7

  return (
    <Col>
      <LoginForm {...{onChange, isDisabled, onSubmit, errors}} />
    </Col>
  );
};

export default Login;
