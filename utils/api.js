import { AsyncStorage } from 'react-native';
const DECK_STORAGE_KEY = 'MobileFlashcards:deck';

export const createDeck = ({ key, cards }) => {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: {
            name: key,
            cards,
        }
    }));
}

export const addCard =  async ({ key, card }) => {
    const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        ...decks[key].cards.push(card),
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

export const fetchDeckResults = async () => {
    const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    console.log(decks);
    if (decks=== '{}' || (Object.entries(decks).length === 0 && decks.constructor === Object)) {
        return {decks: []};
    }
    return decks;
}