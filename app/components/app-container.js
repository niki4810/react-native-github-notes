import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from "./app-navigator";
import { connect } from "react-redux";
import { navigatePage } from "../actions";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  }
});

class AppContainer extends Component {
  render() {
    return (
      <AppNavigator
        navigationState={this.props.navigationState}
        onExit={this._exit}
        onNavigationChange={this.props.onNavigationChange}>
      </AppNavigator>
    )
  }
}

export default connect((state) => state, (dispatch) => {
  return {
    onNavigationChange: (type) => {
      dispatch(navigatePage(type));
    }
  }
} )(AppContainer);
