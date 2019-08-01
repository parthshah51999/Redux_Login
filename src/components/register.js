import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

export default class Register extends Component {
  render() {
    return (
      this.props.isUserLoggedIn ? <Redirect to = "/Home" /> :
      <Formik
        initialValues = {{
          email: '',
          password: '',
          confirmPassword: '',
          firstname: '',
          lastname: ''
        }}

        validationSchema = {
          Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Password is required'),
            confirmPassword: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Confirmation Password is required'),
            firstname: Yup.string()
              .required('First Name is required'),
            lastname: Yup.string()
              .required('Last Name is required')
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
              <label htmlFor="firstname">First Name</label>
              <Field
                name="firstname"
                type="text"
              />
              <ErrorMessage
                name="firstname"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <Field
                name="lastname"
                type="text"
              />
              <ErrorMessage
                name="lastname"
                component="div"
              />
            </div>
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="text"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
              />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </Form>
      )}
      />
    );
  }
}
