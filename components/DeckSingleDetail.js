import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'

class DeckSingleDetail extends React.Component { 

  static navigationOptions = ({navigation}) => {
    const deck = navigation.getParam('deck')
    return {
      title: deck.title,
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate('DeckList')}
          color="#fff"
        />
      ),
    }
  }

  render(){

    const { navigation } = this.props
    const deck = navigation.getParam('deck')

    return (
      <View style={styles.container}>
        <Text h4 style={styles.textCenter}> { deck.title } </Text>

        <View style={{margin: 10}}>
          <Text style={styles.textCenter} > {deck.questions.length} Cards</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('CardNew', {deckTitle: deck.title})} 
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

export default DeckSingleDetail