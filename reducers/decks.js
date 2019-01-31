import { LIST_DECKS } from '../actions/decks'

export default function decks( state = [], action ){

  switch(action.type) {
    case LIST_DECKS:
      return action.decks
  }

}