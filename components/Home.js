
import DeckTabNavigation from './DeckTabNavigation' 
import DeckSingleDetail from './DeckSingleDetail'
import CardNew from './CardNew'
import Quiz from './Quiz'
import QuizEnd from './QuizEnd'

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
  CardNew: CardNew,
  Quiz: Quiz,
  QuizEnd: QuizEnd
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