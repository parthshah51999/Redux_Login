import React from 'react';
import {
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import AboutUs from './aboutUs';
import Home from './home';
import Login from './login';
import Register from './register';

const COMPONENT_MAP = {
    'AboutUs': AboutUs,
    'Home': Home,
    'Login': Login,
    'Register': Register,
  },
  links = ['Home', 'Login', 'Register', 'About Us'];

export const Header = (props) => {
  const { isUserLoggedIn } = props,
    displayLinks = isUserLoggedIn ? ['Home', 'About Us'] : [...links];
  return (
    <HashRouter>
      <div>
        <ul className="headerClass nav clearfix">
          {
            displayLinks.map((value, index) => {
              const toLink = `/${value.replace(/ /g, '')}`;
              return (
                <li
                  key={index}
                  className="nav-item float-left"
                >
                  <NavLink
                    to={toLink}
                    className="nav-link"
                  >
                    {value}
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
        <div className="contentClass">
          {
            links.map((value, index) => {
              const pathVar = `/${value.replace(/ /g, '')}`,
                componentVar = value.replace(/ /g, '');
              return (
                <Route
                  path={pathVar}
                  component={COMPONENT_MAP[componentVar]}
                  key={index}
                />
              );
            })
          }
          <Route
            exact
            path="/"
            component={Home}
          />
        </div>
      </div>
    </HashRouter>
  );
};

const mapStateToProps = state => (
  {
    isUserLoggedIn: state.isUserLoggedIn,
  }
);

export default connect(mapStateToProps)(Header);
