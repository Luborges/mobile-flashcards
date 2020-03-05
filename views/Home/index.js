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
  Container,
  Card,
  FlatList,
  NewDeckContainer,
  TextInput,
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
  
  createNewDeck() {
    const { input } = this.state;
    
    /*if (input && input!=='') {
      const key = timeToString();
      createDeck({ key, deck: input });
      dispatch(addDeck({ key, deck: input }));
      this.props.navigation.navigate('Deck', { key })
    }*/
  }

  deleteDeck(key) {
    deleteDeck().then(() => {
      dispatch(removeDeck(key));
    });
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }));
  }

  renderItem = ({ item }) => {
    return <DeckCard deck={item} />
  }

  render() {
    const { ready, input } = this.state;
    const { decks } = this.props;
    
    if (ready === false) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Card>
          <Title>Deck List</Title>
          <NewDeckContainer>
            <TextInput 
              value={input}
              onChange={this.handleTextChange}
              placeholder={'Create new deck'}
            />
            <AddDeck onPress={() => this.createNewDeck()}><ButtonText>+</ButtonText></AddDeck>
          </NewDeckContainer>
          <FlatList
            data={decks}
            renderItem={this.renderItem}>
          </FlatList>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps ({ decks }) {
  return {
      decks: decks || [],
  }
}

export default connect(mapStateToProps)(Home);