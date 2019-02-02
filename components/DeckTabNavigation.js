import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import DeckList from './DeckList'
import DeckNew from './DeckNew'

const DeckTabNavigation = createMaterialTopTabNavigator({
  DeckList: DeckList,
  DeckNew: DeckNew
})


export default createAppContainer(DeckTabNavigation)