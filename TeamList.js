/**
 * Created by dunice on 06.03.17.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, View} from 'react-native';


const Shedule = [
  {host: {name: 'h1', city: 'hc1'}, guest: {name: 'g1', city: 'gc1'}, date: "11.11.1111"},
  {host: {name: 'h2', city: 'hc2'}, guest: {name: 'g2', city: 'gc2'}, date: "22.22.2222"},
  {host: {name: 'h3', city: 'hc3'}, guest: {name: 'g3', city: 'gc3'}, date: "33.33.3333"},
];

const styles = {
  game_anounce: {padding: 10, fontSize: 20, color: 'red'},
  game_date: {padding: 10, fontSize: 20, color: 'blue'},
  game_city: {padding: 10, fontSize: 20, color: 'green'}
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
          <View>
            <Text style={styles.game_anounce}>{this.state.element.host.name + '-' + this.state.element.guest.name}</Text>
            <Text style={styles.game_city}>{this.state.element.host.city + '-' + this.state.element.guest.city}</Text>
            <Text style={styles.game_date}>{this.state.element.date}</Text>
          </View>
    );
  }
}





