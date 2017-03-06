//AwesomeProject
import React, {Component} from 'react';
import TeamList from './TeamList.js';
import {AppRegistry, Text, TextInput, View} from 'react-native';


class GamesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listofteams: []
    };

  }

  componentDidMount() {
    const listofteams = ListOfPlayingTeams;
    this.setState({listofteams});
  }

  render() {
    return (
      <View>
        <Text>test</Text>
        <View style={{alignItems: 'center'}}>
          {this.state.listofteams.map(game =>
            <TeamList line={game} />
          )}
        </View>
      </View>
    )
  }
}

const ListOfPlayingTeams = [
  {host: {name: 'h1', city: 'hc1'}, guest: {name: 'g1', city: 'gc1'}, date: "11.11.1111"},
  {host: {name: 'h2', city: 'hc2'}, guest: {name: 'g2', city: 'gc2'}, date: "22.22.2222"},
  {host: {name: 'h3', city: 'hc3'}, guest: {name: 'g3', city: 'gc3'}, date: "33.33.3333"},
];



AppRegistry.registerComponent('AwesomeProject', () => GamesDisplay);




