import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button,  Text} from 'react-native-elements'


export default function QuizEnd(props) {
  return(
    <View style={styles.container}>
      <Text 
        h4
        style={styles.text}>
        FIM DE PAPO!!!!
      </Text>
      <Button
        onPress={() => props.navigation.navigate('DeckList')}
        style={styles.btn}
        title="DECK LISTS"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  
  text: {
    marginBottom: 20,

  },

  btn: {
    marginTop: 10,
  },
})