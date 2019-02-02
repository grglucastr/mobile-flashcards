import DeckList from './DeckList'

import  DeckTabNavigation from './DeckTabNavigation' 
import { createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator(
{
  Home: {
    screen: DeckTabNavigation,
    navigationOptions:{
      title: 'FlashCards',
    }
  }
},
{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: '#2089dc'
    },
    headerTitleStyle:{
      color: '#fff',
    }
  }
})

export default createAppContainer(AppNavigator)