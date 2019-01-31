import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'


import DeckNew from './components/DeckNew'
import DeckList from './components/DeckList'

const TabConfig = {
  tabBarOptions: {
    tabStyle: {
      marginTop: Constants.statusBarHeight
    }
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: DeckList,
  AddNewDeck: DeckNew
}, TabConfig)

export default createAppContainer (TabNavigator)
