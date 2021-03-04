import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Private from './../base-template/private';

const PrivateRoute = ({ component: Component, authed, roles, profile, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!authed) {
        let { pathname, search } = props.location;
        localStorage.setItem('nextRoute', pathname + search);
      } else {
        localStorage.removeItem('nextRoute');
      }

      if (authed) {
        return (
          <Private>
            <Component {...props} />
          </Private>
        );
      } else {
        return <Redirect push to="/" />;
      }
    }}
  />
);

export default PrivateRoute;