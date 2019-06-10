import { combineReducers } from 'redux';
import { ADD_CARD, UPDATE_CARD } from './actionTypes';
import * as columns from '../columns';

const initialState = getFromLocalStorage('cards') || [
  {
    title: 'foo',
    column: columns.CARD_A
  },
  {
    title: 'bar',
    column: columns.CARD_A
  },

  {
    title: 'foo1',
    column: columns.CARD_B
  },
  {
    title: 'bar1',
    column: columns.CARD_B
  },

  {
    title: 'foo2',
    column: columns.CARD_C
  },
  {
    title: 'bar2',
    column: columns.CARD_C
  },

  {
    title: 'foo3',
    column: columns.CARD_D
  },
  {
    title: 'bar3',
    column: columns.CARD_D
  }
];

function newCard({ title, column }) {
  return {
    title,
    column
  };
}

function saveToLocalStorage(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
}
function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value);
}

function cards(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      const newState1 = [...state, newCard(action.payload)];
      saveToLocalStorage(newState1);
      return newState1;
    case UPDATE_CARD:
      const newState2 = state.map(
        card => (card.title === action.payload.title ? action.payload : card)
      );
      saveToLocalStorage(newState2);

      return newState2;
    default:
      return state;
  }
}

export default combineReducers({ cards });
