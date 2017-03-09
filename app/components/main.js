import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchBio} from "../actions";

import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import {api} from "../utils/api";
import Dashboard from "./dashboard";

var styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#48BBEC'
  },
  title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center',
      color: '#fff'
  },
  searchInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
  },
  buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
  },
  button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "niki4810",
      isLoading: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({
      username: ev.nativeEvent.text
    });
  }

  handleSubmit(ev) {
    this.props.handleSearchClick({
      username: this.state.username
    });
  }

  render() {
    const {bio = {}} = this.props;
    const {
      loading,
      error
    } = bio;

    const showError = (
      error ? <Text> {error} </Text> : <View></View>
    );

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a Github User</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange}/>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor="white">
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={loading}
          size="large"
          color="#111">
        </ActivityIndicator>
        {showError}
      </View>
    )
  }
}

export default connect((state)=> {
  return state;
}, (dispatch) => {
  return {
    handleSearchClick(payload) {
      dispatch(fetchBio(payload));
    }
  }
})(Main);
