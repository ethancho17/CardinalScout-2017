import React from 'react';
import { AppRegistry } from 'react-native';
import Home from './scenes/Home'
class CardinalScoutApp extends React.Component{
  render(){
  return (
    <Home/>
   );
  }
}
AppRegistry.registerComponent('CardinalScoutApp', () => CardinalScoutApp);