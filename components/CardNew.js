import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Text, Button } from 'react-native-elements'

class CardNew extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      title: `New Card for ${navigation.getParam('deckTitle')}`
    }
  }

  state = {
    question: '',
    answer:'',
  }

  submitCard(){
    console.log('come on state', this.state);
    
  }


  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>

        <Text h4> New Card </Text>

        <TextInput
          name="question"
          value={this.state.question}
          style={styles.textInput}
          onChangeText={(question) => this.setState({question})}
          placeholder="Insert card's question here"/>

        <TextInput
          name="answer"
          value={this.state.answer}
          style={styles.textInput}
          onChangeText={(answer) => this.setState({answer})}
          placeholder="Insert card's answer here"/>

        <Button
          onPress={() => this.submitCard()}
          title="Submit"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40, 
    borderColor: 'gray',
    borderBottomWidth: 1, 
    marginBottom: 20,
    width: '80%',
    alignItems: 'center'
  },

  btnAddDeck:{
    marginTop: 20
  }
})

export default CardNew