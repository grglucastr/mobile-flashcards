import React from 'react'
import {View, ScrollView, Text} from 'react-native'
import { connect } from 'react-redux'
import { handleListDecks } from '../actions/decks'

import DeckListItem from './DeckListItem'

class DeckList extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleListDecks())
  }

  render () {
    const { decks } = this.props  
    return (
      <ScrollView>        
        <View style={{marginBottom: 10}}>
        {
          Object.keys(decks).map((deck) => (
            <DeckListItem 
              key={deck} 
              navigation={this.props.navigation} 
              deckId={deck}
            />
          ))
        }
        </View>
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {  
  const { decks } = state  
  return { decks }
}

export default connect(mapStateToProps)(DeckList)