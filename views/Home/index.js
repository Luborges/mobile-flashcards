// React
import React, { Component } from 'react';

// React Native
import { AppLoading } from 'expo';

// Redux
import { connect } from 'react-redux';
import { receiveDecks, addDeck, removeDeck } from '../../actions';

// Api
import { createDeck, fetchDeckResults, deleteDeck } from '../../utils/api';

// Components
import DeckCard from '../../components/DeckCard';

// Styles
import {
  AddDeck,
  ButtonText,
  ButtonView,
  Container,
  Card,
  FlatList,
  Title
} from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: true,
      input: '',
    }
  }

  componentDidMount(){
    const { decks, dispatch } = this.props;
    if (decks.length === 0) {
      fetchDeckResults()
        .then((entries) => dispatch(receiveDecks(entries)))
        .then(() => this.setState(() => ({
          ready: true,
      })));
    }
  }

  deleteDeck(key) {
    deleteDeck().then(() => {
      dispatch(removeDeck(key));
    });
  }

  renderItem = ({ item }) => {
    const { decks } = this.props;
    return <DeckCard deck={decks[item]} navigation={this.props.navigation} />
  }

  addDeck = () => {
    this.props.navigation.navigate('CreateDeck');
  }

  render() {
    const { ready } = this.state;
    const { decks } = this.props;
    
    if (ready === false) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Card>
          <Title>Deck List</Title>
          <AddDeck onPress={this.addDeck}>
            <ButtonView>
              <ButtonText>Add Deck</ButtonText>
            </ButtonView>
          </AddDeck>
          <FlatList
            data={Object.keys(decks)}
            renderItem={this.renderItem}>
          </FlatList>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps ({ decks }) {
  const deckList = decks ? JSON.parse(decks) : [];

  return {
    decks: deckList,
  }
}

export default connect(mapStateToProps)(Home);