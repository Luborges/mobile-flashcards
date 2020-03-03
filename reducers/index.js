import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from '../actions';

function entries (state = [], action) {
    const actions = {
        [RECEIVE_DECKS]: () => {
            return {
                ...state,
                ...action.decks,
            }
        },
        [ADD_DECK]: () => {
            return {
                ...state,
                ...action.deck,
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