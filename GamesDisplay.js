/**
 * Created by dunice on 07.03.17.
 */
//AwesomeProject
import React, {Component} from 'react';
import TeamList from './TeamList.js';
import {AppRegistry, TouchableHighlight, Text, TextInput, View} from 'react-native';

import MyScene from './MyScene.js';

const ListOfPlayingTeams = [
  {host: {name: 'Barcelona', city: 'Barcelona(Spain)'}, guest: {name: 'Bayern', city: 'Munich(Germany)'}, date: "08.03.2017"},
  {host: {name: 'Chelsea', city: 'London(UK)'}, guest: {name: 'Real', city: 'Madrid(Spain)'}, date: "01.04.2017"},
  {host: {name: 'Manchester United', city: 'Manchester(UK)'}, guest: {name: 'Arsenal', city: 'London(UK)'}, date: "12.04.2017"},
  {host: {name: 'Internazionale', city: 'Milan(Italy)'}, guest: {name: 'Porto', city: 'Porto(Portugal)'}, date: "20.04.2017"}
];

export default class GamesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listofteams: [],
      title: this.props.title,
      //onForward: this.props.onForward,
      onBack: this.props.onBack
    };

  }

  componentDidMount() {
    let listofteams = ListOfPlayingTeams;
    this.setState({listofteams});
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        <MyScene
                  title="Second scene"
                  //onForward={this.props.onForward}
                  onBack={this.props.onBack}
                                                    />
        {
          this.state.listofteams.map((game, i) => {
              return <TeamList key={'key-' + i}
                               line={game}/>
            }
          )}
      </View>
    )
  }
}

//AppRegistry.registerComponent('AwesomeProject', () => NavAllDay);



