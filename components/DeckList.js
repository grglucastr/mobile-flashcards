import React from 'react'
import {View, ScrollView, Text} from 'react-native'
import { connect } from 'react-redux'
import { handleListDecks } from '../actions/decks'

import DeckItem from './DeckItem'

class DeckList extends React.Component {

  componentDidMount(){
    this.props.dispatch(handleListDecks())
  }

  render () {
    const { decks } = this.props  
    return (
      <ScrollView>        
        <View>
        {
          Object.keys(decks).map((deck) => (
            <DeckItem key={deck} />
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