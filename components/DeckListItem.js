import React from 'react'
import {View, } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'

export default DeckListItem = ({navigation, deck}) => {

  const {title} = deck

  return (
    <View>
      <Card
        title={title}>
        <Text style={{marginBottom: 10, textAlign: "center"}}>
          {deck.questions.length} Cards
        </Text>

        <Button
          onPress={() => navigation.navigate('DeckSingleDetail', {deck})}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW DECK' />
      </Card>
    </View>
  )
}