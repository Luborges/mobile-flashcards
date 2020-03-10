// React
import React from 'react';

// Components
import CardFlip from 'react-native-card-flip';

// Styles
import {
    styles,
    Card,
    Text
  } from './styles';

const Deck = (props) => {
    const { question, answer } = props;

    return (
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card}>
            <Card onPress={() => this.card.flip()}><Text>{question}</Text></Card>
            <Card onPress={() => this.card.flip()}><Text>{answer}</Text></Card>
        </CardFlip>
    )
}

export default Deck;