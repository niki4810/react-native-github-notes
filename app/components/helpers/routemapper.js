import React, { Component } from 'react';

import {
  AppRegistry,
  Image,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

let styles = StyleSheet.create({
  navBarText: {
    fontSize: 16,
    marginVertical: 10
  },
  navBarTitleText: {
    color: '#000',
    fontWeight: '500'
  },
  navBarLeftButton: {
    padding: 10
  },
  navBarRightButton: {
    padding: 10
  },
  navBarButtonText: {
    color: '#ffffff'
  },
  icon: {
    fontSize: 16,
    color: "#4285f4",
    fontWeight: '500'
  }
});

export default {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={styles.icon}>{"< back"}</Text>
      </TouchableOpacity>
    );
  },
  RightButton: function(route, navigator, index, navState) {
    return null;
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  }
};
