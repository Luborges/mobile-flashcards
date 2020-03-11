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

export const FlatList = styled.FlatList`
  flex: 3;
`;

export const AddDeck = styled.TouchableOpacity`
  width: 200px;
  margin: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  text-align: center;
`;

export const ButtonView = styled.View`
  background-color: #4c4c6a;
  border: 1px solid #4c4c6a;
  padding: 5px;
`;

export const NewDeckContainer = styled.View`
  flex-direction: row;
  padding: 5px;
`;

export const TextInput = styled.TextInput`
  width: 150px;
  border: 1px solid transparent;
  border-bottom-color: #ccc;
`;