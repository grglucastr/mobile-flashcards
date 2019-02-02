import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import DeckList from './DeckList'
import DeckNew from './DeckNew'

const DeckTabNavigation = createMaterialTopTabNavigator({
  DeckList: {
    screen:DeckList, 
    navigationOptions:{
      title: 'Deck List'
    }
  },
  DeckNew: {
    screen: DeckNew, 
    navigationOptions: {
      title: 'Add Deck'
    }
  } 
})


export default createAppContainer(DeckTabNavigation)