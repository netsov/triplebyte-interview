import React from 'react';
import './App.css';
import { Provider, connect } from 'react-redux';

import * as columns from './columns';

import { Column } from './components/Column';
import Card from './components/Card';
import AddCard from './components/AddCard';
import { store } from './redux/store';

const Cards = ({ cards, column, showLeft, showRight }) => {
  return cards.map(card => (
    <Card
      key={card.title}
      card={card}
      column={column}
      showLeft={showLeft}
      showRight={showRight}
    />
  ));
};

function mapStateToProps(state, props) {
  return {
    cards: state.cards.filter(card => card.column === props.column)
  };
}
const ConnectedCards = connect(mapStateToProps)(Cards);

function App() {
  return (
    <main className="">
      <Provider store={store}>
        {columns.ALL.map((column, index) => (
          <Column key={column} name={column}>
            <ConnectedCards
              column={column}
              showLeft={index !== 0}
              showRight={index !== columns.ALL.length - 1}
            />
            <AddCard column={column} />
          </Column>
        ))}
      </Provider>
    </main>
  );
}

export default App;
