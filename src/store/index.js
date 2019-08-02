import { createStore } from 'redux';
import reducer from '../reducers/index';

const initialState = {
    isUserLoggedIn: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
  store = createStore(reducer, initialState);

export default store;
