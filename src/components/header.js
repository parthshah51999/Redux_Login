import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import AboutUs from './aboutUs';
import Home from './home';
import Login from './login';
import Register from './register';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { isUserLoggedIn: state.isUserLoggedIn };
}

const COMPONENT_MAP = {
  'AboutUs': AboutUs,
  'Home': Home,
  'Login': Login,
  'Register': Register,
}

let links = ['Home', 'Login', 'Register', 'About Us'];
export const Header = (props) => {
  const displayLinks = props.isUserLoggedIn ? ['Home', 'About Us'] : [...links];
  return (
    <HashRouter>
      <div>
        <ul>
          {
            displayLinks.map((value, index) => {
              const toLink = '/' + value.replace(/ /g,'');
              return (
                <li key={index}><NavLink to = {toLink}>{value}</NavLink></li>
              );
            })
          }
        </ul>
        <div>
            {
              links.map((value, index) => {
              const pathVar = '/' + value.replace(/ /g,'');
              const componentVar = value.replace(/ /g,'');
              return (
                  <Route
                    path = {pathVar}
                    component = {COMPONENT_MAP[componentVar]}
                    key = {index}
                  />
                );
              })
            }
            <Route exact path = "/" component = {Home} />
        </div>
      </div>
    </HashRouter>
  );
}

export default connect(mapStateToProps)(Header);
