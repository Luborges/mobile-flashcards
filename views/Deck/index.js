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
    Title,
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
      const { name, cards } = this.props.deck;
      return(
          <Container>
              <Title>
                  Deck: {name}
              </Title>
              <Text>
                cards: {cards.length}
              </Text>
          </Container>
      )
  }
}

function mapStateToProps ({ decks }, { navigation }) {
    const { name } = navigation.state.params;
    return {
        name,
        deck: decks[name],
    }
}
  

export default connect(mapStateToProps)(Home);