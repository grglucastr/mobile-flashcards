import React from 'react'
import { connect } from 'react-redux'
import {View, TextInput, StyleSheet} from 'react-native'
import { Text, Button, CheckBox } from 'react-native-elements'
import { handleUpdateDeckCards } from '../actions/decks'

class CardNew extends React.Component {
  
  static navigationOptions = {
    title: `New Card`
  }

  state = {
    question: '',
    answer:'',
    isCorrect: false,
  }

  submitCard(){
    const { navigation } = this.props
    const deckId = navigation.getParam('deckId')
    const {deck} = this.props

    deck.questions.push(this.state)
    const newDeck = {
      [deckId]:deck
    }
    
    this.setState({question:'', answer: '',  isCorrect: false,})
    this.props.dispatch(handleUpdateDeckCards(newDeck))
    navigation.navigate('DeckSingleDetail', {deckId})
    
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
          placeholder="Insert card's answer description"/>
        
        <View style={styles.chckBox}>
          <CheckBox
            center
            title='Check me if this question is correct'
            checked={this.state.isCorrect}
            onPress={() =>  this.setState(state => ({isCorrect: !state.isCorrect})) }
          />
        </View>

        <Button
          onPress={() => this.submitCard()}
          disabled={this.state.question === '' || this.state.answer === ''}
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

  chckBox: {
    marginBottom: 20,
  },

  btnAddDeck:{
    marginTop: 20
  },
})

function mapStateToProps({decks}, props){
  const deckId = props.navigation.getParam('deckId')
  const deck = decks[deckId]

  return {
    deck
  }
}

export default connect(mapStateToProps)(CardNew)