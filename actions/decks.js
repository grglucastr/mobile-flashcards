import { 
  fetchAllDecks,
  saveNewDeck,
 } from '../utils/api'

export const LIST_DECKS = 'LIST_DECKS'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const UPDATE_DECK_CARDS = 'UPDATE_DECK_CARDS'

function listDecks(decks){
  return {
    type: LIST_DECKS,
    decks
  }
}

function addNewDeck(deck){
  return {
    type: ADD_NEW_DECK,
    deck
  }
}

function updateDeckCards(deck){
  return {
    type: UPDATE_DECK_CARDS,
    deck
  }
}

export function handleListDecks() {
  return (dispatch) => { 
    fetchAllDecks().then((decks) => { 
      dispatch(listDecks(decks))
    }).catch(error => console.error(error))
  }
}

export function handleAddNewDeck(deck){
  return (dispatch) => {
    dispatch(addNewDeck(deck)) 
    saveNewDeck(deck)
      .catch((error) => alert('An error occurred while trying to add new Deck. Please try again.'))
  }
}

export function handleUpdateDeckCards(deck) {
  return (dispatch) => {
    dispatch(updateDeckCards(deck))
    saveNewDeck(deck)
      .catch((error) => alert('An error occurred while trying to UPDATE new Deck. Please try again.'))
  }
}