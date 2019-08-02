import React, { Component } from 'react';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import { setLoginData } from '../action/index';

export class Login extends Component {
  setLoginData(fields) {
    const { setLoginData } = this.props;
    return setLoginData(fields);
  }

  render() {
    const { isUserLoggedIn } = this.props;
    return (
      isUserLoggedIn ? <Redirect to="/Home" />
        : (
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string()
                  .email('Email is invalid')
                  .required('Email is required'),
                password: Yup.string()
                  .min(6, 'Password must be at least 6 characters')
                  .required('Password is required'),
              })
            }
            onSubmit={(fields) => {
              axios.post('https://reqres.in/api/login', { email: fields.email, password: fields.password })
                .then(() => {
                  this.setLoginData(fields);
                })
                .catch((error) => {
                  console.log(error);
                  alert('Please enter valid credentials.');
                });
            }}
            render={() => (
              <Form>
                <div className="formComponent">
                  <label htmlFor="email">Email Id</label>
                  <Field
                    name="email"
                    type="text"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                  />
                </div>
                <div className="formComponent">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="text"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">Log in</button>
                </div>
              </Form>
            )}
          />
        )
    );
  }
}

const mapDispatchToProps = dispatch => (
    {
      setLoginData: (fields) => {
        dispatch(setLoginData(fields));
      },
    }
  ),
  mapStateToProps = state => (
    {
      isUserLoggedIn: state.isUserLoggedIn,
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
