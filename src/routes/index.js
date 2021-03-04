import React, { Component } from 'react';
import { Switch, Router } from 'react-router-dom';
import {connect} from 'react-redux';

import { BroserHistory} from './../config';
import { publicRoute, privateRoute } from './route-list';

import ComponentPrivateRoute from './components/private';
import ComponentPublicRoute from './components/public';
import ComponentErrorRoute from './components/error';

// import NotFound from './../pages/utils/errors/not-found';

class Routes extends Component {
  render() {
    let { token } = this.props;
    return (
      <Router history={BroserHistory}>
        <Switch>
          {privateRoute.map((item, index) => (
            <ComponentPrivateRoute
              key={index.toString()}
              path={item.path}
              component={item.component}
              authed={token}
              exact={item.isExact}
            />
          ))}
          {publicRoute.map((item, index) => (
            <ComponentPublicRoute
              key={index.toString()}
              path={item.path}
              component={item.component}
              authed={token}
              exact={item.isExact}
            />
          ))}
          <ComponentErrorRoute component={() => (<div>Not Found</div>)} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.core.token,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);