/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigationExperimental } from 'react-native';
import BaseScene from "./base-scene";

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

export default class AppNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this._onPopRoute = this.props.onNavigationChange.bind(null, "pop");
    this._renderScene = this._renderScene.bind(this);
  }
  _renderScene(sceneProps) {
    return (
      <BaseScene
        title={sceneProps.navigationState.title}
        index={sceneProps.scene.index}
        route={sceneProps.scene.route}
        onPopRoute={this._onPopRoute}
        onExit={this.props.onExit}
      />
    );
  }

  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
      />
    );
  }
}
