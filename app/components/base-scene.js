/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NavBar from "./navbar";

import Main from ".//main";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Repositories from "./repositories";
import Notes from "./notes";
import MyWebView from "./helpers/mywebview";

const styles = StyleSheet.create({
  baseScene: {
    flex:1
  }
});

const CompsMap = {
  "main": Main,
  "dashboard": Dashboard,
  "profile": Profile,
  "repos": Repositories,
  "notes": Notes,
  "webview": MyWebView
};

export default class BaseScene extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.index !== nextProps.index;
  }
  
  render() {
    const Component = CompsMap[this.props.route.key];
    return (
      <View style={styles.baseScene}>
        <NavBar
          index={this.props.index}
          onPress={this.props.onPopRoute}
          title={`Scene ${this.props.index}`}>
        </NavBar>
        <Component />
      </View>
    );
  }
}
