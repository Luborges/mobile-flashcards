// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Styles
import {
    Button,
    TextButton,
    Container,
    Title,
    Score,
  } from './style';

class Result extends Component {
    goTo (route) {
        const { navigation, name } = this.props;
        navigation.navigate(route, { name });
    }

    render () {
        const { rights, wrongs, name } = this.props;
        return (
            <Container>
                <Title>At the deck {name}</Title>
                <Score>
                    you got {rights} of the questions right and you missed {wrongs} of the questions
                </Score>
                <Button onPress={() => this.goTo('Deck')}><TextButton>Go back to the deck</TextButton></Button>
                <Button onPress={() => this.goTo('Quiz')}><TextButton>Try again</TextButton></Button>
            </Container>
        );
    }
}

function mapStateToProps ({ decks }, { navigation }) {
    const { name, rights, wrongs } = navigation.state.params;
    return {
        name,
        deck: decks[name],
        rights,
        wrongs
    }
}

export default connect(mapStateToProps)(Result);