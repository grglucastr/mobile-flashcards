export const LIST_DECKS = 'LIST_DECKS'

export function listDecks(decks){
  return {
    type: LIST_DECKS,
    decks
  }
}