import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#fff",
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderColor: "#d8d8d8"
  },
  navBarAlt: {
    backgroundColor: "#fff",
    minHeight: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderColor: "#d8d8d8"
  },
  navBarAction: {
    width: 50,
  },
  navBarActionText: {
    color: "#159bde"
  },
  navBarSpacer: {
    width: 50
  },
  navBarTitle: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default class NavBar extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.index !== nextProps.index;
  }

  render() {
    const isNotABasePage = this.props.index > 0;
    return (
      <View style={isNotABasePage ? styles.navBarAlt : styles.navBar}>
        {isNotABasePage && <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor="#D0D0D0"
          style={styles.navBarAction}>
          <Text style={styles.navBarActionText}>◀ Back</Text>
        </TouchableHighlight>}
        <Text style={styles.navBarTitle}>{this.props.title}</Text>
        {isNotABasePage && <Text style={styles.navBarSpacer}></Text>}
      </View>
    );
  }
};
