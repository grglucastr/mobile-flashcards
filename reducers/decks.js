import { 
  LIST_DECKS,
  ADD_NEW_DECK,
  UPDATE_DECK_CARDS,
} from '../actions/decks'

export default function decks( state = {}, action ){
  
  switch(action.type) {
    case LIST_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case ADD_NEW_DECK:
      return {
        ...state,
        ...action.deck
      }
    
    case UPDATE_DECK_CARDS:     
      return {
        ...state, 
        ...action.deck
      }

    default:
      return state
  }

}