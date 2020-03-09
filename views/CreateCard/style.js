import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    width: 200px;
    margin: 35px 10px 5px 10px;
`;

export const TextInput = styled.TextInput`
    width: 200px;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid #000;
`;

export const AddCard = styled.TouchableOpacity`
  flex: 1;
  margin: 10px 5px;
`;

export const ButtonText = styled.Text`
  width: 150px;
  padding: 10px;
  border: 1px solid;
  border-color: ${props => (props.borderColor || '#4c4c6a')};
  background-color: ${props => (props.backgroundColor || '#4c4c6a')};
  color: ${props => (props.color || '#fff')};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 100px;
`;