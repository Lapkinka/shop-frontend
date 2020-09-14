import React, { Component } from 'react';

export default class ErrorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: true });
    console.warn(error, 'error');
    console.warn(errorInfo, 'errorInfo');
  }

  render() {
    return this.props.children;
  }
}
