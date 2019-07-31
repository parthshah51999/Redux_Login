import { createStore } from 'redux'
import reducer from '../reducers/index'

const initialState = null;
const store = createStore(reducer, initialState);

export default store;
