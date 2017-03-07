/**
 * Created by dunice on 06.03.17.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, View} from 'react-native';

const styles = {
  game_anounce: {marginTop: 30, fontSize: 20, color: 'red'},
  game_date: {paddingTop: 10, fontSize: 20, color: 'blue'},
  game_city: {paddingTop: 10, fontSize: 20, color: 'green'},
  container_main: {alignItems: 'center'},
}

export default class TeamList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      element: this.props.line
    };
  }

  render() {
    return (
      <View style={styles.container_main}>
        <Text style={styles.game_anounce}>{this.state.element.host.name + '-' + this.state.element.guest.name}</Text>
        <Text style={styles.game_city}>{this.state.element.host.city + '-' + this.state.element.guest.city}</Text>
        <Text style={styles.game_date}>{this.state.element.date}</Text>
      </View>
    );
  }
}





