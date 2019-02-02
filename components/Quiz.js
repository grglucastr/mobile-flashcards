import React from 'react'
import { View, Text} from 'react-native'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'

class Quiz extends React.Component {

  static navigationOptions = {
    title: 'Quiz in Progress...',
    headerLeft: null
  }

  state = {
    cardIdx: 0,
    card: this.props.questions[0],
    cards: this.props.questions
  }

  getNextQuestion(currentIdx){    

    const limit = this.state.cards.length - 1;
    const cardIdx = currentIdx + 1;

    if(cardIdx <= limit){
      this.setState((state) => ({
        cardIdx,
        card: state.cards[cardIdx]
      }))

    }else{
      this.props.navigation.navigate('QuizEnd')
    }
  }

  render() {
    
    const { cardIdx, card } = this.state   

    return (
      <View style={{flex:1, alignItems: 'center'}}>
        <QuizCard 
          cardIdx={cardIdx}
          card={card}
          onAnswer={(cardIdx) => this.getNextQuestion(cardIdx)} />
      </View>
    )  
  }
}

function mapStateToProps({decks}, props){
  const deckId = props.navigation.getParam('deckId')
  const questions = decks[deckId].questions

  return {
    questions
  }


}


export default connect(mapStateToProps)(Quiz)

