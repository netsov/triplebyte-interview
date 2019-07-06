import { combineReducers } from 'redux';
import { ADD_CARD, FETCH_CARDS, UPDATE_CARD } from './actionTypes';
import { newColumn } from './utils';

const COLUMN_A = newColumn('a', '#8e6e95', 'COLUMN_A');
const COLUMN_B = newColumn('b', '#39A59C', 'COLUMN_B');
const COLUMN_C = newColumn('c', '#344759', 'COLUMN_C');
const COLUMN_D = newColumn('d', '#E8741E', 'COLUMN_D');

const defaultColumns = [COLUMN_A, COLUMN_B, COLUMN_C, COLUMN_D];

function cards(state = [], action) {
  switch (action.type) {
    case FETCH_CARDS:
      return action.payload;
    case ADD_CARD:
      return [...state, action.payload];
    case UPDATE_CARD:
      return state.map(
        card => (card._id === action.payload._id ? action.payload : card)
      );
    default:
      return state;
  }
}

function columns(state = defaultColumns) {
  return state;
}

export default combineReducers({ cards, columns });
