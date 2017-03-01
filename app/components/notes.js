import React, { Component, PropTypes } from 'react';
import Badge from "./badge";
import Separator from "./helpers/separator";
import {
  Text,
  View,
  StyleSheet,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';
import {api} from "../utils/api";


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 65,
        backgroundColor: "#fff"
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.notes),
      note: "",
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderRow(rowData) {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData}</Text>
        </View>
        <Separator/>
      </View>
    )
  }

  handleChange(ev) {
    this.setState({
      note: ev.nativeEvent.text
    });
  }

  handleSubmit() {
    const note = this.state.note;
    this.setState({
      note: ""
    });
    api.addNote(this.props.userInfo.login, note)
    .then((data) => {
      const newNotes = Object.assign({}, this.props.notes, {
        [data.name]: note
      });
      this.setState({
        note: "",
        dataSource: this.ds.cloneWithRows(newNotes)
      });
    }).catch((err) => {
      console.log(`Request Failed : err`);
      this.setState({error: err});
    });
  }
  footer() {
    return (
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange}
          placeholder="New Note">
          </TextInput>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit}
            underlayColor="#88d4f5">
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
      <ListView dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={this.renderRow}
        renderHeader={() => <Badge userInfo={this.props.userInfo}/>}/>
        {this.footer()}
      </View>
    )
  }
}
