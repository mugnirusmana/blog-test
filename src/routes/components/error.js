import React from 'react';
import { Route } from 'react-router-dom';

import Public from './../base-template/public';

const ErrorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <Public>
          <Component {...props} />
        </Public>
      )
    }}
  />
)

export default ErrorRoute;