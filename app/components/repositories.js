import React, { Component } from 'react';
import Badge from "./badge";
import Separator from "./helpers/separator";
import {connect} from "react-redux";
import {
  showWebView
} from "../actions";

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

class Repositories extends Component {
  openPage(url) {
    this.props.goToWebView(url);    
  }
  render() {
    var repos = this.props.repos;
       var list = repos.map((item, index) => {
           var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />;
           return (
               <View key={index}>
                   <View style={styles.rowContainer}>
                       <TouchableHighlight
                           onPress={this.openPage.bind(this, repos[index].html_url)}
                           underlayColor='transparent'>
                           <Text style={styles.name}>{repos[index].name}</Text>
                       </TouchableHighlight>
                       <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
                       {desc}
                   </View>
                   <Separator />
               </View>
           )
       });
       return (
           <ScrollView style={styles.container}>
               <Badge userInfo={this.props.userInfo} />
               {list}
           </ScrollView>
       );
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.bio.details,
    repos: state.repos.details
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToWebView(url) {
      dispatch(showWebView({
        url
      }));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
