import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.Text`
    flex: 3;
    font-size: 28px;
`;

export const Score = styled.Text`
    flex: 4;
    width: 200px;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    flex: 1;
    width: 200px;
`;

export const TextButton = styled.Text`
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
`;