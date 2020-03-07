import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from '../actions';

function entries (state = [], action) {
    const actions = {
        [RECEIVE_DECKS]: () => {
            return {
                ...state,
                decks: action.decks,
            }
        },
        [ADD_DECK]: () => {
            let decks = {
                [action.deck.key]: {
                    name: action.deck.key,
                    cards: action.deck.cards,
                }
            };
            console.log({
                ...state,
                decks,
            })
            console.log('aaa');
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
        }
    }

    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}

export default entries;