import React from 'react';
import Login from './components/login';
import store from './store';

class Main extends React.Component {
  render() {
    return (
      <div className="parent">
        <Login />
      </div>
    );
  }
}

export default Main;
