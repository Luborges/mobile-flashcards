// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { removeDeck } from '../../actions';

// Api
import { deleteDeck } from '../../utils/api';

// Styles
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Title,
  Text
} from './styles';

class Deck extends Component {
  deleteDeck () {
    const { dispatch, navigation, name } = this.props;
    deleteDeck(name).then(() => {
      dispatch(removeDeck(name));
      navigation.navigate('Home');
    });
  }

  navigate (path) {
    const { name } = this.props.deck;
    this.props.navigation.navigate(path, { name });
  }

  render () {
      const { deck } = this.props;
      return(
          <Container>
              <Title>
                  Deck: {deck && deck.name}
              </Title>
              <Text>
                cards: {deck && deck.cards.length}
              </Text>
              <ButtonContainer>
                <Button onPress={() => this.navigate('CreateCard')}>
                  <ButtonText backgroundColor={'#fff'} color={'#000'} borderColor={'#000'}>
                    Add Card
                  </ButtonText>
                </Button>
                <Button onPress={() => this.navigate('Quiz')}>
                  <ButtonText backgroundColor={'#000'} color={'#fff'} borderColor={'#000'}>
                    Start Quiz
                  </ButtonText>
                </Button>
                <Button onPress={() => this.deleteDeck()}>
                  <ButtonText backgroundColor={'transparent'} color={'#cc0000'} borderColor={'transparent'}>
                    Delete Deck
                  </ButtonText>
                </Button>
              </ButtonContainer>
          </Container>
      )
  }
}

function mapStateToProps ({ decks }, { navigation }) {
    const { name } = navigation.state.params;
    return {
        name,
        deck: decks && decks[name],
    }
}

export default connect(mapStateToProps)(Deck);