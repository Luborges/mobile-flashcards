// React
import React from 'react';

// Styles
import {
    Card,
    Name,
    Total,
    NavigateButton
  } from './styles';

const Deck = (props) => {
    const { name, cards } = props.deck;
    console.log(name);
    
    const gotoDeck = () => {
        props.navigation.navigate('Deck', { name });
    }

    return (
        <NavigateButton onPress={() => gotoDeck()}>
            <Card>
                <Name>{name}</Name>
                <Total>Cards: {cards.length}</Total>
            </Card>
        </NavigateButton>
    )
}

export default Deck;