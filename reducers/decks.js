import { 
  LIST_DECKS,
  ADD_NEW_DECK,
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
        [action.deck.key]:action.deck.title
      }
    
    default:
      return state
  }

}