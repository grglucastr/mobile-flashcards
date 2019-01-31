import { AsyncStorage } from 'react-native'
const PROJ_KEY = "PROJ_KEY:mobile-flashcards"

export function submitNewDeck({key, title}){
  AsyncStorage.mergeItem(PROJ_KEY, JSON.stringify({
    [key]: title
  })).then(() => {
    fetchAllDecks()
  })


}


export function fetchAllDecks(){
  return AsyncStorage.getItem(PROJ_KEY).then((response) => {
    console.log('all keeys', JSON.parse(response));
  })
}