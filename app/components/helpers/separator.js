import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "#e4e4e4",
    flex: 1,
    marginLeft: 15
  }
});

export default class Separator extends Component {
  render() {
    return (
      <View style={styles.separator}/>
    );
  }
}
