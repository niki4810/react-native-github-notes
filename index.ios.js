/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import AppContainer from "./app/components/app-container";
import { Provider } from 'react-redux'
import configureStore from "./app/store";

const store = configureStore();

export default class AwesomeProject extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
