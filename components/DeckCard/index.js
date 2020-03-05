import React from 'react';
// Styles
import {
    Card,
    Name,
    Total
  } from './styles';

const Deck = (props) => {
    //const { props } = props;
    return (
        <Card>
            <Name>{props.deck.name}</Name>
            <Total>Cards: {props.deck.cards}</Total>
        </Card>
    )
}

export default Deck;