import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { Header, Sidebar, Footer } from './../../pages/utils';
// import { setActiveBurgerIcon } from './../../pages/core/action';

class Private extends Component {
  render() {
    return (
      <div>
        <span>HEADER</span>
        {this.props.children}
        <span>FOOTER</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Private);
