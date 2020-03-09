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
    constructor () {
        super();
        this.state = {
            question: '',
            answer: '',
        }
    }

    textChange (name, value) {
        this.setState({
            [name]: value,
        })
    }

    createCard () {
        const { dispatch, name } = this.props;
        const { question, answer } = this.state;
        dispatch(createCard(name, question, answer));
        addCard({key: name, card: {question, answer}});
    }

    render () {
        const { question, answer } = this.state;
        return (
            <Container>
                <Text>Questions</Text>
                <TextInput placeholder={'Question'} 
                    value={question} onChange={evt => this.textChange('question', evt.target.value)} />
                <Text>Answer</Text>
                <TextInput placeholder={'Answer'}
                    value={answer} onChange={evt => this.textChange('answer', evt.target.value)} />
                <Button onPress={this.createCard}>
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