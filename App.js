import React from 'react'
import { StyleSheet, View } from 'react-native'

import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import decks from './reducers/decks'
import DeckList from './components/DeckList'

const appStore = createStore(combineReducers({decks}),  applyMiddleware(thunk))

class App extends React.Component {

  render () {
    return(
      <Provider store={appStore}>
        <View style={styles.viewContainer}>
          <DeckList />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App
