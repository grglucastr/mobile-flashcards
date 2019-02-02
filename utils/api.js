import { AsyncStorage } from 'react-native'
const PROJ_KEY = "PROJ_KEY:mobile-flashcards"

export function saveNewDeck({key, title}){
  return new Promise((resolve, reject) => {
    AsyncStorage.mergeItem(PROJ_KEY, JSON.stringify({[key]: title}))
      .then((response) => resolve(response))
      .catch(error => reject(error))
  }) 
}

export function fetchAllDecks(){
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(PROJ_KEY)
      .then((response) =>  resolve(JSON.parse(response)))
      .catch((error) => reject(error))
  }) 
}

export function clearAll() {
  AsyncStorage.clear()
}