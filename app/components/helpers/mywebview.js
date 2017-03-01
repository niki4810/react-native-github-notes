import React, { Component } from 'react';

import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6ef",
    flexDirection: "column",
    marginTop: 65
  }
});

export default class MyWebView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}}/>
      </View>
    );
  }
}
