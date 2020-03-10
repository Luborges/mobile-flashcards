import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CardQuestion = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextEmpty = styled.Text`
    width: 200px;
    text-align: center;
`;

export const CardView = styled.View`
    flex: 1;
    margin: 15px;
`;

export const Button = styled.TouchableOpacity`
    width: 270px;
    margin: 15px;
`;

export const TextButton = styled.Text`
    padding: 10px;
    border-color: ${props => (props.borderColor || '#000')};
    background-color: ${props => (props.backgroundColor || '#000')};
    color: ${props => (props.color || '#000')};
    border-radius: 5px;
    text-align: center;
`;

export const QuestionNumberText = styled.Text`
    text-align: center;
    font-size: 15px;
    margin-bottom: 15px;
`;

export const QuestionNumberView = styled.View`

`;