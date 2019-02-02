import { 
  fetchAllDecks
 } from '../utils/api'

export const LIST_DECKS = 'LIST_DECKS'

function listDecks(decks){
  return {
    type: LIST_DECKS,
    decks
  }
}

export function handleListDecks() {
  return (dispatch) => { 
    fetchAllDecks().then((decks) => { 
      dispatch(listDecks(decks))
    }).catch(error => console.error(error) )
  }
}