import React, {Component} from 'react';
import {AppRegistry, NavigationBar, TouchableHighlight, Text, Navigator, View} from 'react-native';
import GamesDisplay from './GamesDisplay.js';
import MyScene from './MyScene.js';

export default class NavAllDay extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    let route_ctrl = 0;
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          {if (route.index === 0){
            return <MyScene
                            title={route.title}
                            onForward={ () => {
                              navigator.push({index: 1});
                            }}

                            // Function to call to go back to the previous scene
                            onBack={() => {
                              if (route.index > 0) {
                               navigator.pop();}}}
                                                      />
          } else {return <GamesDisplay
                                  title={route.title}
                                  onForward={ () => {
                                    navigator.push({index: 1});
                                  }}
                                  onBack={() => {
                                    if (route.index > 0) {
                                    navigator.pop();}}}/>
          }
          }
        }
        style={{padding: 20}}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => NavAllDay);




