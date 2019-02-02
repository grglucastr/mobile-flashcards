import React from 'react'
import {View, } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'

export default DeckListItem = ({navigation, title}) => {
  return (
    <View>
      <Card
        title={title}>
        <Text style={{marginBottom: 10, textAlign: "center"}}>
          0 cards
        </Text>

        <Button
          onPress={() => navigation.navigate('DeckSingleDetail', {title})}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
    </View>
  )
}