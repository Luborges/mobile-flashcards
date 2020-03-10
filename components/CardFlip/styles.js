import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Card = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    flex: 1;
    text-align: center;
    font-size: 30px;
`;

export const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 20,
        width: 300,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});