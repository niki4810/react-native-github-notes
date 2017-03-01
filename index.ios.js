/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator
} from 'react-native';
import Main from "./app/components/main";
import RouteMapper from "./app/components/helpers/routemapper";

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  navBar: {
    backgroundColor: "#fff",
    minHeight: 50
  }
});

export default class AwesomeProject extends Component {
  _renderScene(route, navigator) {
    var Component = route.component;
    return (
      <Component {...route.props} navigator={navigator} route={route}/>
    )
  }

  render() {
    return (
    <Navigator
      style={styles.container}
      initialRoute={{
          title: "Github Notetaker",
          component: Main
        }}
       renderScene={this._renderScene}
       navigationBar={
         <Navigator.NavigationBar
          routeMapper={RouteMapper}
          navigationStyles={Navigator.NavigationBar.StylesIOS}
          styles={styles.navBar}
          />
       }
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
