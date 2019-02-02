This project is part of the course React Developer by Udacity.
This project was bootstrapped with [Create React Native App]
This is an open source project, you can contribute to it if you want

## Mobile FlashCards

This is a QUIZ APP project. It allows you to add quizes and answer them.
Assuming you have NodeJS installed on your PC, in the project directory, you can run:

Please, make sure you have [https://expo.io/](EXPO) installed too

### `npm install`
This command will download all the libraries necessary to run this project

### `npm start`

Runs the app in the development mode.

The page will reload if you make edits.
You will also see any lint errors in the console.

### backend server
For this project I am using AsyncStorage, so everything is stored local

```sh
/src/util/api.js
```


### project components description

| Component | Description |
| ------ | ------ |
| App | Start Component, Main Component |
| CardNew | This is where it is possible to add new cards to a specific deck |
| DeckList | Loop over a list of decks |
| DeckListItem | This component renders a single item of a list of decks |
| DeckNew | Component responsible to add a new deck |
| DeckSingleDetail | Component responsible for render the details of a deck. There it is possible to bind cards to it and start the quiz  |
| DeckTabNavigation | This component is responsible to manage navigation through the views using Tabs  |
| Home | Component responsible to manage the StackNavigation |
| Quiz | Responsible to manage the score of the quiz and the cards  |
| QuizCard | This components renders a single card in the quiz mode |
| QuizEnd | Renders the final score |