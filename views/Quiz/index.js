// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Styles
import {
    CardQuestion,
    Container,
  } from './style';

class Quiz extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: 0,
        }
    }

    nextPrevious (arrow) {
        const { cards } = this.props.deck;
        const { navigation, name } = this.props;
        if (arrow===1) {
            if (cards.length>selected-1) {
                selected++;
            }
            else{
                navigation.navigate('Result', { name })
            }
        }
        if (arrow === -1) {
            if (selected>0) {
                selected--;
            }
        }
    }

    render () {
        return (
            <Container>
                <CardQuestion>

                </CardQuestion>
            </Container>
        );
    }
}

function mapStateToProps ({ decks }, { navigation }) {
    const { name } = navigation.state.params;
    return {
        name,
        deck: decks[name],
    }
}

export default connect(mapStateToProps)(Quiz);