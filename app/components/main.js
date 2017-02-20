import React, { Component } from 'react';

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
      marginTop: 65,
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

export default class Main extends Component {
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
    //update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });

    const {username} = this.state;
    // fetch data from Github
    api.getBio(username).then((res) => {
      if(res.message === "Not Found") {
        this.setState({
          error: "User Not Found",
          isLoading: false
        });
      } else {
        this.props.navigator.push({
          title: res.name || "Select an Option",
          component: Dashboard,
          passProps: {userInfo: res}
        });

        this.setState({
          isLoading: false,
          error: false,
          username: "niki4810"
        });
      }
    });
    //reroute to the next passing that github information
  }

  render() {
    const {error, isLoading} = this.state;
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
          animating={isLoading}
          size="large"
          color="#111">
        </ActivityIndicator>
        {showError}
      </View>
    )
  }
}
