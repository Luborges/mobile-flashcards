//React
import React from 'react';

//Native
import { StatusBar, View } from 'react-native';
import Constants from 'expo-constants';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

//Components
import Home from './views/Home';
import Deck from './views/Deck';

function FlashcardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4C4C6A',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4C4C6A',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
    },
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
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor={'#4C4C6A'} />
          <Layout />
        </View>
      </Provider>
    );
  }
}