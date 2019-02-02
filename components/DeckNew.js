import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TextInput } from 'react-native'
import { Button, Text } from 'react-native-elements'

import { handleAddNewDeck } from '../actions/decks'

class DeckNew extends Component {

  state = {
    title: ''
  }

  onSubmit() {
    const { title } = this.state
    const key = title.replace(/\s/g, '');

    const deckObj = {
      [key]: {
        title,
        questions:[]
      }
    } 
    
    this.props.dispatch(handleAddNewDeck(deckObj))
    this.setState({title: ''})
    this.props.navigation.navigate('DeckSingleDetail', {deckId: key});
    
  }

  render() {
    return (
      <View >
        <Text h4>Add New Deck</Text>
        <TextInput
          name="title"
          value={this.state.title}
          style={styles.textInput}
          onChangeText={(title) => this.setState({title})}
          placeholder="Insert new Deck's title here"/>

        <Button
          title="Add Deck"
          disabled={this.state.title === ''}
          style={styles.btnAddDeck}
          onPress={() => this.onSubmit()}
        />
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
  },

  btnAddDeck:{
    marginTop: 20
  }
})


export default connect()(DeckNew)