import React from 'react'

import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import decks from './reducers/decks'
import Home from './components/Home'

import {clearAll} from './utils/api'

const appStore = createStore(combineReducers({decks}),  applyMiddleware(thunk))

class App extends React.Component {

  componentDidMount() {
    //clearAll()
  }

  render () {
    return(
      <Provider store={appStore}>
        <Home />
      </Provider>
    )
  }
}

export default App
