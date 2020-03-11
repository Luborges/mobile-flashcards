// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { addDeck } from '../../actions';

// Api
import { createDeck } from '../../utils/api';

// Styles
import {
  AddDeck,
  ButtonText,
  Container,
  Card,
  NewDeckContainer,
  TextInput,
  Title
} from './style';

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }
  
  createNewDeck() {
    const { input } = this.state;
    const { dispatch, navigation } = this.props;
    if (input && input!=='') {
      const newCard = { key: input, cards: [] };
      dispatch(addDeck(newCard));
      createDeck(newCard).then(() => {
        navigation.navigate('Deck', {name: input});
      });
    }
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }));
  }

  render() {
    const { input } = this.state;

    return (
      <Container>
        <Card>
          <Title>What is the title of your new deck?</Title>
          <NewDeckContainer>
            <TextInput 
              value={input}
              onChange={evt => this.handleTextChange(evt.nativeEvent.text)}
              placeholder={'Deck name'}
            />
            <AddDeck onPress={() => this.createNewDeck()}><ButtonText>Create Deck</ButtonText></AddDeck>
          </NewDeckContainer>
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

export default connect(mapStateToProps)(CreateDeck);