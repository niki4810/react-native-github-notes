import React, { Component } from 'react';
import {connect} from "react-redux";

import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6ef",
    flexDirection: "column"
  }
});

class MyWebView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}}/>
      </View>
    );
  }
}

export default connect((state) => {
  return {
    url: state.repos.url
  };
})(MyWebView);
