// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import CardFlip from '../../components/CardFlip';

// Styles
import {
    CardQuestion,
    Container,
    TextEmpty,
    CardView,
    Button,
    TextButton
  } from './style';

class Quiz extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: 0,
        }
    }

    render () {
        const { deck } = this.props;
        return (
            <Container>
                <CardQuestion>
                    {
                        deck.cards.length === 0 ?
                            <TextEmpty>Sorry, you cannot take a quiz because there are no cards in the deck.</TextEmpty>
                        :
                        <CardView>
                            {deck.cards.map((item, i) => 
                                <CardFlip key={'card_'+i} answer={item.answer} question={item.question} />)}
                                <Button><TextButton backgroundColor={'#00cc00'} 
                                    borderColor={'#00cc00'} color={'#fff'}>Correct</TextButton></Button>
                                <Button><TextButton backgroundColor={'#cc0000'} 
                                    borderColor={'#cc0000'} color={'#fff'}>Incorrect</TextButton></Button>
                        </CardView>
                    }
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