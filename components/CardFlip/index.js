// React
import React, { Component } from 'react';

// Components
import CardFlip from 'react-native-card-flip';

// Styles
import {
    styles,
    Card,
    Text,
    ShowAnswer,
    CardButton
  } from './styles';

class FlipCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            flip: false,
            rights: 0,
            wrongs: 0,
        }
        this.card;
    }

    flipCard (card) {
        const { flip } = this.state;
        this.setState({
            flip: !flip,
        });
        card.flip();
    }

    render () {
        const { question, answer } = this.props;
        const { flip } = this.state;
        
        return (
            <CardFlip style={styles.cardContainer} ref={(card) => this.card = card}>
                <CardButton onPress={() => this.flipCard(this.card)}>
                    <Card>
                        <Text>{question}</Text>
                    </Card>
                    <ShowAnswer>{flip ? 'Show question' : 'Show answer'}</ShowAnswer>
                </CardButton>
                <CardButton onPress={() => this.flipCard(this.card)}>
                    <Card>
                        <Text>{answer}</Text>
                    </Card>
                    <ShowAnswer>{flip ? 'Show question' : 'Show answer'}</ShowAnswer>
                </CardButton>
            </CardFlip>
        )
    }
}

export default FlipCard;