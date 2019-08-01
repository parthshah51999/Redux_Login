import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import store from '../store/index';
import { setLoginData } from '../action/index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { isUserLoggedIn: state.isUserLoggedIn };
}

export class Login extends Component {
  render() {
    return (
      this.props.isUserLoggedIn ? <Redirect to = "/Home" /> :
      <Formik
        initialValues = {{
          email: '',
          password: ''
        }}

        validationSchema = {
          Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Password is required')
          })
        }

        onSubmit = {fields => {
          axios.post(`https://reqres.in/api/login`, { email: fields.email, password: fields.password })
          .then(res => {
            store.dispatch(setLoginData(fields));
          })
          .catch(error => {
            console.log(error);
            alert('Please enter valid credentials.');
          })
        }}

        render = {() => (
          <Form>
            <div>
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
            <div>
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
              <button type="submit">Log In</button>
            </div>
          </Form>
      )}
      />
    );
  }
}

export default connect(mapStateToProps)(Login);
