import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'


class DeckNew extends Component {

  static navigationOptions  ={ 
    tabBarLabel: 'New Deck'
  }

  render() {
    return (
      <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Text>What is the title of your new Deck?</Text>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, width:'90%'}}
        />
      </View>
    )
  }
}

export default DeckNew