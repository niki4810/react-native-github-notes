/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AppContainer from "./app-container";
import { Provider } from 'react-redux'
import configureStore from "../store";

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
