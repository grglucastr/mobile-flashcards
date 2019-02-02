import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button,  Text} from 'react-native-elements'

export default class QuizEnd extends React.Component {
  static navigationOptions = {
    title: 'Quiz is Done!',
    headerLeft: null
  }

  render(){
    return(
      <View style={styles.container}>
        <Text 
          h4
          style={styles.text}>
          Done! Your percentage correct: {this.props.navigation.getParam('percent')}%
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('DeckList')}
          style={styles.btn}
          title="DECK LISTS"
        />
      </View>
    )  
  }
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