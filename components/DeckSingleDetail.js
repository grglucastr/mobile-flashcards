import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'

class DeckSingleDetail extends React.Component { 

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title'),
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate('DeckList')}
          color="#fff"
        />
      ),
    }
  }

  render(){
    return (
      <View>
        <Text>HAHAHAHAHAHA THE DETAIL </Text>
      </View>
    )
  }
}

export default DeckSingleDetail