/**
 * Created by dunice on 07.03.17.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import GamesDisplay from './GamesDisplay.js';
export default class MyScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };

  }

  render() {
    return (
      <View>
        <Text >Current Scene: {this.state.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to next</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to back</Text>
        </TouchableHighlight>

      </View>
    )
  }
}


//"start": "node node_modules/react-native/local-cli/cli.js start",