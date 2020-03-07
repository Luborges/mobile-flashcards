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

export const ButtonText = styled.Text`
    height: 20px;
    color: #fff;
    background-color: #4c4c6a;
    border: 1px solid #4c4c6a;
    text-align: center;
`;