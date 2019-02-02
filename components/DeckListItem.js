import React from 'react'
import {View, } from 'react-native'
import { connect } from 'react-redux'
import { Card, Text, Button } from 'react-native-elements'

class DeckListItem extends React.Component {

  render() {

    const { navigation, deckId, deck } = this.props
    const {title} = deck

    return (
      <View>
        <Card
          title={title}>
          <Text style={{marginBottom: 10, textAlign: "center"}}>
            {deck.questions.length} Cards
          </Text>
  
          <Button
            onPress={() => navigation.navigate('DeckSingleDetail', {deckId})}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW DECK' />
        </Card>
      </View>
    )
  }
}

function mapStateToProps({decks}, props){

  const { deckId } = props  
  return {
    deck: decks[deckId]
  }
}

export default connect(mapStateToProps)(DeckListItem)

