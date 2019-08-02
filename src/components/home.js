import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../action/index';

export class Home extends React.Component {
  logoutUser() {
    const { logoutUser } = this.props;
    return logoutUser();
  }

  render() {
    const { isUserLoggedIn, email } = this.props;
    return (isUserLoggedIn
      ? (
        <div>
          <h1>
            Welcome
            {email}
            !
          </h1>
          <p> You have successfully logged into the application.</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.logoutUser.bind(this)}
          >
            Logout
          </button>
        </div>
      )
      : (
        <div>
          <h1>This is the home page of the application.</h1>
          <p>To login or register please click on the respective tab. To get more information about this app navigate to the about us tab.</p>
        </div>
      )
    );
  }
}

const mapDispatchToProps = dispatch => (
    {
      logoutUser: () => {
        dispatch(logoutUser());
      },
    }
  ),
  mapStateToProps = state => (
    {
      isUserLoggedIn: state.isUserLoggedIn,
      email: state.email,
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
