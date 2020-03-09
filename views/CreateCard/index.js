// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { createCard } from '../../actions';

// Api
import { addCard } from '../../utils/api';


// Styles
import {
    Button,
    ButtonText,
    Container,
    Text,
    TextInput,
  } from './style';

class CreateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
        }
    }

    handleTextChange = (name, value) => {
        this.setState(() => ({
            [name]: value,
        }));
      }

    newCard () {
        const { dispatch, name, navigation } = this.props;
        const { question, answer } = this.state;
        const card = {key: name, card: {question, answer}};
        dispatch(createCard(card));
        addCard(card);
        navigation.navigate('Deck', { name });
    }

    render () {
        const { question, answer } = this.state;
        return (
            <Container>
                <Text>Questions</Text>
                <TextInput placeholder={'Question'} 
                    value={question} onChange={evt => this.handleTextChange('question', evt.nativeEvent.text)} />
                <Text>Answer</Text>
                <TextInput placeholder={'Answer'}
                    value={answer} onChange={evt => this.handleTextChange('answer', evt.nativeEvent.text)} />
                <Button onPress={() => this.newCard()}>
                  <ButtonText backgroundColor={'#000'} color={'#fff'} borderColor={'#000'}>
                    Submit
                  </ButtonText>
                </Button>
            </Container>
        );
    }
}

function mapStateToProps ({ decks }, { navigation }) {
    const { name } = navigation.state.params;
    return {
        name,
    }
}

export default connect(mapStateToProps)(CreateCard);