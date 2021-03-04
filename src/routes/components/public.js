import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Public from './../base-template/public';

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!authed) {
        return (
          <Public>
            <Component {...props} />
          </Public>
        );
      } else {
        return <Redirect push to="/dashboard" />;
      }
    }}
  />
);

export default PublicRoute;
