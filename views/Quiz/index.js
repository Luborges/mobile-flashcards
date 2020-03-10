// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import FlipCard from '../../components/CardFlip';

// Styles
import {
    CardQuestion,
    Container,
    TextEmpty,
    CardView,
    Button,
    TextButton,
    QuestionNumberText,
    QuestionNumberView
  } from './style';

class Quiz extends Component {
    constructor (props) {
        super(props);
        this.state = {
            select: 0,
            rights: 0,
            wrongs: 0,
        }
    }

    componentWillUnmount() {
        this.setState({
            select: 0,
            rights: 0,
            wrongs: 0,
        });
    }

    componentDidUpdate (prevProps) {
        if (this.props.navigation !== prevProps.navigation){
            this.setState({
                select: 0,
                rights: 0,
                wrongs: 0,
            });
        }
    }

    verification (name) {
        this.setState((prevState) => ({
            [name]: prevState[name]+1,
            select: prevState.select+1,
        }));
    }

    render () {
        const { deck, name } = this.props;
        const { select, rights, wrongs } = this.state;
        const item = deck.cards[select];

        if (select===deck.cards.length) {
            return this.props.navigation.navigate('Result', { name, rights, wrongs });
        }

        return (
            <Container>
                <CardQuestion>
                    {
                        deck.cards.length === 0 ?
                            <TextEmpty>Sorry, you cannot take a quiz because there are no cards in the deck.</TextEmpty>
                        :
                        select<deck.cards.length &&
                            <CardView>
                                <QuestionNumberView><QuestionNumberText>Question {select +1} of {deck.cards.length}</QuestionNumberText></QuestionNumberView>
                                <FlipCard answer={item.answer} question={item.question} />
                                <Button onPress={() => this.verification('rights')}>
                                    <TextButton backgroundColor={'#00cc00'} 
                                        borderColor={'#00cc00'} color={'#fff'}>Correct</TextButton></Button>
                                <Button onPress={() => this.verification('wrongs')}>
                                    <TextButton backgroundColor={'#cc0000'} 
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