import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

export default class Login extends Component {
  render() {
    return (
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
            console.log(res);
            console.log(res.data);
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
