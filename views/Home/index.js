// React
import React, { Component } from 'react';

// React Native
import { AppLoading } from 'expo';

// Redux
import { connect } from 'react-redux';
import { receiveDecks, addDeck, removeDeck } from '../../actions';

// Api
import { createDeck, fetchDeckResults, deleteDeck } from '../../utils/api';

// Styles
import {
  Container,
  Card,
  Text
} from './styles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    }
  }

  compoentDidMount(){
    const { decks, dispatch } = this.props;
    if (!decks) {
      fetchDeckResults()
        .then((entries) => dispatch(receiveDecks(entries)))
        .then(() => this.setState(() => ({
          ready: true,
      })));
    }
  }
  
  createNewDeck(evt) {
    const key = timeToString();
    const deck = evt.target.value;
    createDeck({ key, deck });
    dispatch(addDeck({ key, deck }));
  }

  deleteDeck(key) {
    deleteDeck().then(() => {
      dispatch(removeDeck(key));
    });
  }

  render() {
    const { ready } = this.state;
    if (ready === false) {
      return <AppLoading />;
    }

    return (
        <Card>
          <Text>
            Home
          </Text>
        </Card>
    );
  }
}

function mapStateToProps ({ decks = null }) {
  return {
      decks,
  }
}

export default connect(mapStateToProps)(App);