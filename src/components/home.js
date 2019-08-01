import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { isUserLoggedIn: state.isUserLoggedIn };
}

export const Home = (props) => {
  return ( props.isUserLoggedIn ?
    <div>
      <h1>Welcome {props.email}!</h1>
      <p> You have successfully logged into the application.</p>
    </div> :
    <div>
      <h3>This is the home page of the application.</h3>
      <p>To login or register please click on the login tab. To get more information about this app navigate to the about us tab.</p>
    </div>
  );
}

export default connect(mapStateToProps)(Home);
