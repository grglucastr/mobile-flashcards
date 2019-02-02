import React from 'react'
import { View, StyleSheet} from 'react-native'
import { Text, Button } from 'react-native-elements'

export default class QuizCard extends React.Component { 

  state = {
    showAnswer: false,
    buttonTitle: 'View Answer'
  }

  onViewAnswer(){
    this.setState((state) => ({
      showAnswer: !state.showAnswer,
      buttonTitle: !state.showAnswer ? 'Hide Answer' : 'View Answer'
    }))
  }

  render() {

    const { cardIdx, card, onAnswer } = this.props

    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent:'center'}}>
        <Text h4> {card.question} </Text>
        
        {
          this.state.showAnswer && (<Text style={{textAlign: 'center'}}>
          {card.answer}
        </Text>)
        }
        

        <View style={{marginTop: 50, marginBottom: 90}}>
          <Button    
            onPress={() => this.onViewAnswer()}
            title={this.state.buttonTitle}
            type="clear"
            />
        </View>

        <Button          
          onPress={() => onAnswer(cardIdx)}
          title="Correct"
          buttonStyle={styles.btn}
        />

        <Button
          buttonStyle={[styles.btn, styles.btnIncorrect]}
          onPress={() => onAnswer(cardIdx)}
          title="Incorrect"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    marginBottom: 60,
  },

  btnIncorrect: {
    backgroundColor: 'red'
  }
})