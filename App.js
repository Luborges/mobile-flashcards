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
import middleware from './middleware';

//Components
import Home from './views/Home';
import Deck from './views/Deck';
import CreateDeck from './views/CreateDeck';
import CreateCard from './views/CreateCard';
import Quiz from './views/Quiz';
import Result from './views/Result';

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
        backgroundColor: '#4c4c6a',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
    },
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4c4c6a',
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
        backgroundColor: '#4c4c6a',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
    },
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4c4c6a',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4c4c6a',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
    },
  },
  Result: {
    screen: Result,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4c4c6a',
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
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor={'#4c4c6a'} />
          <Layout />
        </View>
      </Provider>
    );
  }
}