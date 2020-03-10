// React
import React, { Component } from 'react';

// React Native
import { AppLoading } from 'expo';

// Redux
import { connect } from 'react-redux';
import { receiveDecks } from '../../actions';

// Api
import { fetchDeckResults } from '../../utils/api';

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
    }
  }

  componentDidMount () {
    const { decks, dispatch } = this.props;
    if (decks.length === 0) {
      fetchDeckResults()
        .then((entries) => dispatch(receiveDecks(entries)))
        .then(() => this.setState(() => ({
          ready: true,
      })));
    }
  }

  renderItem = ({ item }, i) => {
    const { decks } = this.props;
    return <DeckCard key={'deck'+i} deck={decks[item]} navigation={this.props.navigation} />
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
            renderItem={this.renderItem}
            keyExtractor={(_item, index) => index.toString()}>
          </FlatList>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps ({ decks }) {
  const deckList = decks || [];
  return {
    decks: deckList,
  }
}

export default connect(mapStateToProps)(Home);