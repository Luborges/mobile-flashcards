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

// Helpers
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers';

class Quiz extends Component {
    constructor (props) {
        super(props);
        this.state = {
            select: 0,
            rights: 0,
            wrongs: 0,
        }
    }

    verification (nameState) {
        const { deck } = this.props;
        this.setState((prevState) => ({
            [nameState]: prevState[nameState]+1,
            select: prevState.select+1,
        }), () => {
            const { select, rights, wrongs } = this.state;
            if (select===deck.cards.length) {
                const { name } = this.props;
                this.gotoResult(name, rights, wrongs);
            }
        });        
    }

    gotoResult (name, rights, wrongs) {
        clearLocalNotification()
                .then(setLocalNotification);

            this.setState({
                select: 0,
                rights: 0,
                wrongs: 0,    
            }, () => {
                this.props.navigation.navigate('Result', { name, rights, wrongs });
            });
    }

    render () {
        const { deck } = this.props;
        const { select } = this.state;
        const item = deck.cards[select];

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