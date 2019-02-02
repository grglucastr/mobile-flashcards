import React from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'
import { handleListDecks } from '../actions/decks'

class DeckList extends React.Component {

  componentDidMount(){
    this.props.dispatch(handleListDecks())
  }

  render () {
    const { decks } = this.props  
    return (
      <View>        
        {
          Object.keys(decks).map((deck) => (
            <Text key={deck}>{decks[deck]}</Text>
          ))
        }
      </View>
    )
  }
}


function mapStateToProps(state) {  
  const { decks } = state
  return { decks }
}

export default connect(mapStateToProps)(DeckList)