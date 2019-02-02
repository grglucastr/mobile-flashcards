import React from 'react'
import {View, Text} from 'react-native'
import { Card } from 'react-native-elements'

export default DeckListItem = ({deckId, title}) => {
  return (
    <View>
      <Card
        title={title}>
        <Text style={{marginBottom: 10, textAlign: "center"}}>
          0 cards
        </Text>
      </Card>
    </View>
  )
}