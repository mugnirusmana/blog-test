import React, { Component } from 'react';

class Public extends Component {
  render() {
    return (
      <div className="main">
        {this.props.children}
      </div>
    )
  }
}

export default Public;