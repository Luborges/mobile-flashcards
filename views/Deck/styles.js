import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const Text = styled.Text`
  flex: 1;
`;

export const Title = styled.Text`
  flex: 1;
  color: #000;
  font-weight: 500;
  font-size: 33px;
`;

export const AddCard = styled.TouchableOpacity`
  flex: 1;
  margin: 10px 5px;
`;

export const ButtonContainer = styled.View`
  flex: 2;
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
  flex: 1;
`;