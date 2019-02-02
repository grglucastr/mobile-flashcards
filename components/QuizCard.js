import React from 'react'
import { View, StyleSheet} from 'react-native'
import { Text, Button } from 'react-native-elements'

export default function QuizCard({cardIdx, card, onAnswer}){
  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <Text h4> ({cardIdx}) -  {card.question} </Text>
      <Text> View Answer </Text>

      <Button
        style={styles.btn}
        onPress={() => onAnswer(cardIdx)}
        title="Correct"
      />

      <Button
        style={styles.btn}
        onPress={() => onAnswer(cardIdx)}
        title="Incorrect"
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    marginBottom: 60
  },
})