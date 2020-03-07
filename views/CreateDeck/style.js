import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    flex: 1;
    color: #000;
    font-weight: 500;
    font-size: 33px;
`;

export const Card = styled.View`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const AddDeck = styled.TouchableOpacity`
    flex: 1;
    margin: 10px 5px;
`;

export const ButtonText = styled.Text`
    height: 20px;
    color: #fff;
    background-color: #4c4c6a;
    border: 1px solid #4c4c6a;
    text-align: center;
`;

export const NewDeckContainer = styled.View`
    width: 250px;
    flex: 2;
    flex-direction: column;
    padding: 5px;
`;

export const TextInput = styled.TextInput`
    margin: 10px 5px;
    background-color: #fff;
    border: 1px solid #ccc;
`;