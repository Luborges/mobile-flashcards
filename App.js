import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    /*navigationOptions: {
      header: null,
    },*/
  },
});

const createRootNavigator = logged => {
  return createAppContainer(
    createSwitchNavigator(
      {
        Home: {screen: MainNavigator},
      },
      {
        initialRouteName: logged ? 'Home' : '',
      },
    ),
  );
};

export default class App extends React.Component {
  render() {
    const Layout = createRootNavigator(true);
    return <Layout />;
  }
}