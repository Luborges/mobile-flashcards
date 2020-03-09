// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Styles
import {
    Container,
  } from './style';

class Result extends Component {
    render () {
        return (
            <Container>

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

export default connect(mapStateToProps)(Result);