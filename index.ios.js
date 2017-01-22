import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import FriendsList from './src/components/FriendsList';

const App = () => {
    return (
      <View>
          <Header headerText="Wander" />
          <FriendsList />
      </View>
    );
};

AppRegistry.registerComponent('wanderReact', () => App);
