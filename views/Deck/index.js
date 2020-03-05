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
    Text
} from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: true,
      input: '',
    }
  }

  render () {
      const { deck } = this.props;
      return(
          <Container>
              <Text>
                  Deck: {deck.name}
              </Text>
          </Container>
      )
  }
}

function mapStateToProps ({ decks }, { navigation }) {
    const { key } = navigation.state.params;
    return {
        deck: decks[key],
    }
}
  

export default connect(mapStateToProps)(Home);