import React, { Component } from 'react';
import ErrorInfo from '../components/ErrorInfo/ErrorInfo';
import MainPage from '../components/MainPage/MainPage';

export default class App extends Component {
  render() {
    return <ErrorInfo><MainPage /></ErrorInfo>;
  }
}
