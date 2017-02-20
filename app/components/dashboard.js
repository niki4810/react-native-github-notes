import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import {api} from "../utils/api";
import Profile from "./profile";
import Repositories from "./repositories";
import Notes from "./notes";

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToRepos = this.goToRepos.bind(this);
    this.goToNotes = this.goToNotes.bind(this);
  }

  goToProfile(ev) {
    this.props.navigator.push({
      component: Profile,
      title: "Profile Page",
      passProps: {userInfo: this.props.userInfo}
    });
  }

  goToRepos(ev) {
    const {userInfo} = this.props;
    api.getRepos(userInfo.login).then((res) => {
      this.props.navigator.push({
        component: Repositories,
        title: "Repos",
        passProps: {
          userInfo: userInfo,
          repos: res
        }
      });
    });
  }

  goToNotes(ev) {
    const {userInfo} = this.props;
    api.getNotes(userInfo.login).then((res) => {
      res = res || {};
      this.props.navigator.push({
        component: Notes,
        title: "Notes",
        passProps: {
          notes: res,
          userInfo
        }
      });
    });
  }

  makeBackground(btn) {
    var obj = {
      flexDirection: "row",
      alignSelf: "stretch",
      justifyContent: "center",
      flex: 1
    };

    if(btn === 0) {
      obj.backgroundColor = "#4BBBec";
    } else if(btn === 1) {
      obj.backgroundColor = "#e77aae";
    } else {
      obj.backgroundColor = "#758ef4";
    }
    return obj;
  }

  render() {
    const {userInfo = {}} = this.props;
    const {avatar_url} = userInfo;
    return (
      <View style={styles.container}>
        <Image source={{uri: avatar_url}} style={styles.image}/>
        <TouchableHighlight
          onPress={this.goToProfile}
          style={this.makeBackground(0)}
          underlayColor="#88d4f5">
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToRepos}
          style={this.makeBackground(1)}
          underlayColor="#88d4f5">
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToNotes}
          style={this.makeBackground(2)}
          underlayColor="#88d4f5">
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
