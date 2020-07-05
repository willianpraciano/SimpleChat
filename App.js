import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Home from './screens/Home';
import Chat from './screens/Chat';

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" title="Home" component={Home}/>
        <Scene key="chat" title="Char" component={Chat}/>
      </Scene>
    </Router>
  );
}
