import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Main from './main';
import './main.css';
import store from './store';

const render = () => ReactDom.render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));

render();
store.subscribe(render);
