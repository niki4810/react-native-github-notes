import React, { Component } from 'react';
import {
  navigatePage,
  fetchRepos,
  fetchNotes
} from "../actions";

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import {connect} from "react-redux";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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

class Dashboard extends Component {
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
    const {details = {}, goToProfile, goToRepos, goToNotes} = this.props;
    const {avatar_url} = details;
    return (
      <View style={styles.container}>
        <Image source={{uri: avatar_url}} style={styles.image}/>
        <TouchableHighlight
          onPress={goToProfile}
          style={this.makeBackground(0)}
          underlayColor="#88d4f5">
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            const {details = {}} = this.props;
            const {login} = details;
            goToRepos(login);
          }}
          style={this.makeBackground(1)}
          underlayColor="#88d4f5">
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            const {login = ""} = details;
            goToNotes(login);
          }}
          style={this.makeBackground(2)}
          underlayColor="#88d4f5">
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return state.bio;
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToProfile() {
      dispatch(navigatePage({
        type: "push",
        key: "profile"
      }));
    },
    goToRepos(login) {
      dispatch(fetchRepos({
        login
      }));
    },
    goToNotes(username) {
      dispatch(fetchNotes({
        username
      }));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
