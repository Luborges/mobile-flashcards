import { AsyncStorage } from 'react-native';
const DECK_STORAGE_KEY = 'MobileFlashcards:deck';

export const createDeck = ({ key, deck }) => {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: deck,
    }));
}

export const deleteDeck = async ({ key }) => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results);
        data[key] = undefined;
        delete data[key];
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    });
}

export const fetchDeckResults = () => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY);
}