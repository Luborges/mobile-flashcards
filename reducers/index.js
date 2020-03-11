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
            /*const newState = state;
            newState.decks[action.deck.key] = {
                name: action.deck.key,
                cards: action.deck.cards,
            }*/
            return {
                ...state,
                ...state.decks[action.deck.key] = {
                    name: action.deck.key,
                    cards: action.deck.cards,
                }
            }
        },
        [REMOVE_DECK]: () => {
            state.decks[action.key] = undefined;
            delete state.decks[action.key];
            
            return {
                ...state
            }
        },
        [ADD_CARD]: () => {
            const { key, card } = action.card;
            const newCard = state.decks[key];
            newCard.cards.push(card);
            
            return {
                ...state,
                ...state.decks,
                newCard
            }
        }
    }

    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}

export default entries;