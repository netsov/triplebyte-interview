import { combineReducers } from 'redux';
import { ADD_CARD, UPDATE_CARD } from './actionTypes';
import { newCard, newColumn } from './utils';

const COLUMN_A = newColumn('a', '#8e6e95');
const COLUMN_B = newColumn('b', '#39A59C');
const COLUMN_C = newColumn('c', '#344759');
const COLUMN_D = newColumn('d', '#E8741E');

const defaultColumns = [COLUMN_A, COLUMN_B, COLUMN_C, COLUMN_D];

const defaultCards = [
  newCard('foo1', COLUMN_A.id),
  newCard('foo1', COLUMN_A.id),

  newCard('foo2', COLUMN_B.id),
  newCard('foo2', COLUMN_B.id),

  newCard('foowr', COLUMN_C.id),
  newCard('foowervewr', COLUMN_C.id),

  newCard('ewrv', COLUMN_D.id),
  newCard('wervrv', COLUMN_D.id)
];

function cards(state = defaultCards, action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case UPDATE_CARD:
      return state.map(
        card => (card.id === action.payload.id ? action.payload : card)
      );
    default:
      return state;
  }
}

function columns(state = defaultColumns) {
  return state;
}

export default combineReducers({ cards, columns });
