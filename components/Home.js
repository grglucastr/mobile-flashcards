
import  DeckTabNavigation from './DeckTabNavigation' 
import DeckSingleDetail from './DeckSingleDetail'
import CardNew from './CardNew'

import { createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator(
{
  Home: {
    screen: DeckTabNavigation,
    navigationOptions:{
      title: 'FlashCards',
    }
  },
  DeckSingleDetail: DeckSingleDetail,
  CardNew: CardNew
},
{
  initialRouteName: "Home",
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