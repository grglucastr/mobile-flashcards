import React, { Component } from 'react'
import { Button, View, StyleSheet, Text, TextInput } from 'react-native'


class DeckNew extends Component {

  static navigationOptions  ={ 
    tabBarLabel: 'New Deck'
  }

  state = {
    title: ''
  }

  onSubmit() {
  
    const { title } = this.state
    const titleKey = title.replace(" ", "")

  }

  

  render() {
    return (
      <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Text>What is the title of your new Deck?</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title} />

        <Button
          onPress={() => this.onSubmit()}
          title="Submit"
          style={styles.submitButton}          
          accessibilityLabel="Save Deck"/>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40, 
    borderColor: 'gray',
    borderBottomWidth: 1, 
    width:'90%',
  },

  submitButton:{
    color:"#841584"
  }
})


export default DeckNew