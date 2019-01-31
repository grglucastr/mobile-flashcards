import React, { Component } from 'react'
import { View, Text } from 'react-native'


class DeckNew extends Component {

  static navigationOptions  ={ 
    tabBarLabel: 'New Deck'
  }

  render() {
    return (
      <View>
        <Text>Add New Deck</Text>
      </View>
    )
  }
}

export default DeckNew