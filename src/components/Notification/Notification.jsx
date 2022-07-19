import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Notification extends Component {
  static propTypes = { message: PropTypes.string };

  render() {
    const { message } = this.props;
    return <>{message && <div>{message}</div>}</>;
  }
}
