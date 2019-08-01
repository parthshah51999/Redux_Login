import React from 'react';
import Header from './components/header';
import store from './store';

export default class Main extends React.Component {
  render() {
    const state = store.getState();
    return (
      <div className="parent">
        <Header />
      </div>
    );
  }
}
