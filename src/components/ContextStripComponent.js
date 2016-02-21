'use strict';

import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../reducers/mapping';
import { connect } from 'react-redux';

import '../styles/ContextStrip.less';

class ContextStripComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  getLoggedInContext() {
    const { state } = this.props;
    const auth = state.authentication;

    return (
      <div className="profile-context">
        <img src={auth.authData.google.profileImageURL} className="img-responsive profile-image" />
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }

  getLoggedOutContext() {
    const { state } = this.props;
    const auth = state.authentication;

    return (
        <div className="profile-context">
          <i className="img-responsive profile-image fa fa-user" />
          <button onClick={this.props.login}>Login</button>
        </div>
    );
  }

  render() {
    const { state } = this.props;
    const auth = state.authentication;

    return (
      <div className="context-strip">
        <a className="context-area left-context" href="/">feed</a>

        <div className="context-area right-context">
          {
            auth.authData ? this.getLoggedInContext() : this.getLoggedOutContext()
          }
        </div>
      </div>
    );
  }
}

ContextStripComponent.displayName = 'ContextStripComponent';

// Uncomment properties you need
// ContextStripComponent.propTypes = {};
// ContextStripComponent.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContextStripComponent);
