import React from 'react'
import { View,} from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'

class Quiz extends React.Component {

  static navigationOptions = {
    title: 'Quiz in Progress...',
    headerLeft: null
  }

  state = {
    score: 0,
    cardIdx: 0,
    card: this.props.questions[0],
    cards: this.props.questions
  }

  getNextQuestion(currentIdx, userAnswer){    
    
    const limit = this.state.cards.length - 1;
    const cardIdx = currentIdx + 1;
    
    let { score } = this.state
    if(eval(userAnswer) === (this.state.card.isCorrect)){
      score++
    }
 
    if(cardIdx <= limit){
      this.setState((state) => ({
        score,
        cardIdx,
        card: state.cards[cardIdx]
      }))

      

    }else{

      const percent = (score * 100 / this.state.cards.length).toFixed(0)      
      this.props.navigation.navigate('QuizEnd', {score, percent})
    }
  }

  render() {
    
    const { cardIdx, card } = this.state   

    return (
      <View style={{flex:1, alignItems: 'center'}}>
        <Text h4>{(cardIdx + 1)} / {this.state.cards.length}</Text>
        <QuizCard 
          cardIdx={cardIdx}
          card={card}
          onAnswer={(cardIdx, userAnswer) => this.getNextQuestion(cardIdx, userAnswer)} />
      </View>
    )  
  }
}

function mapStateToProps({decks}, props){
  const deckId = props.navigation.getParam('deckId')
  const questions = decks[deckId].questions

  console.log('questions', questions);
  

  return {
    questions
  }


}


export default connect(mapStateToProps)(Quiz)

