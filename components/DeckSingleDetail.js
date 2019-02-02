import React from 'react'
import { connect } from 'react-redux'

import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'
import { handleListDecks } from '../actions/decks'

class DeckSingleDetail extends React.Component { 

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Deck Details',
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate('DeckList')} 
          color="#fff"
        />
      ),
    }
  }

  componentWillUnmount(){
    this.props.loadAllDecks()
  }

  render(){

    const { navigation, deck} = this.props
    const deckId = navigation.getParam('deckId')
       

    return (
      <View style={styles.container}>
        <Text h4 style={styles.textCenter}> { deck.title } </Text>

        <View style={{margin: 10}}>
          <Text style={styles.textCenter}> {deck.questions.length} Cards</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('CardNew', {deckId})} 
            title="Add Cards"/>

          <Button
            title="Start Quiz"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textCenter: {
    textAlign:'center'
  },

  buttonContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})

function mapDispatchToProps( dispatch ){
  return {
    loadAllDecks: function(){
      return dispatch(handleListDecks())
    }
  }
}

function mapStateToProps({decks}, props){
  const deckId = props.navigation.getParam('deckId')
  const deck = decks[deckId]

  return {
    deck
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckSingleDetail)