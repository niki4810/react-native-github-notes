/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from "./app/components/app-root";

export default class AwesomeProject extends Component {
  render() {
    return (
      <Root/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
