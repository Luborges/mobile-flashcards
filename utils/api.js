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

export const addCard = ({ key, card }) => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
        const data = JSON.parse(results);
        
        data[key] = {
            ...data[key],
            cards: [
                ...data[key].cards,
                { question: card.question, answer: card.answer }
            ]
        };
        
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    });
};

export const deleteDeck = async ( key ) => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results);
        data[key] = undefined;
        delete data[key];
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    });
}

export const fetchDeckResults = async () => {
    const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    if (decks=== '{}' || (Object.entries(decks).length === 0 && decks.constructor === Object)) {
        return {decks: []};
    }
    return decks;
}