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
  flex: 1;
`;

export const AddDeck = styled.TouchableOpacity`
  margin: 5px;
`;

export const ButtonText = styled.Text`
  
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