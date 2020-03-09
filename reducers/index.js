import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions';

function entries (state = [], action) {
    const actions = {
        [RECEIVE_DECKS]: () => {
            return {
                ...state,
                decks: action.decks,
            }
        },
        [ADD_DECK]: () => {
            const decks = {
                [action.deck.key]: {
                    name: action.deck.key,
                    cards: action.deck.cards,
                }
            };
            return {
                ...state,
                decks,
            }
        },
        [REMOVE_DECK]: () => {
            return {
                ...state,
                ...action.decks.filter((_item, key) => { return key !== action.key })
            }
        },
        [ADD_CARD]: () => {
            const card = {
                ...state[action.key].cards.push({question: action.question, answer: action.answer})
            }
            return {
                ...state,
                card
            }
        }
    }

    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}

export default entries;