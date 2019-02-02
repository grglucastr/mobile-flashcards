import { AsyncStorage } from 'react-native'
const PROJ_KEY = "PROJ_KEY:mobile-flashcards"

export function submitNewDeck({key, title}){
  AsyncStorage.mergeItem(PROJ_KEY, JSON.stringify({
    [key]: title
  })).then(() => {
    fetchAllDecks().then((response) => {
      console.log('database after insert', response);
      
    })
  })
}


export function fetchAllDecks(){
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(PROJ_KEY)
      .then((response) =>  resolve(JSON.parse(response)))
      .catch((error) => reject(error))
  })
  
}