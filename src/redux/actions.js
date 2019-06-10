import { ADD_CARD, UPDATE_CARD } from './actionTypes';

export function addCard(title, column) {
  return {
    type: ADD_CARD,
    payload: {
      title,
      column
    }
  };
}

export function updateCard(card) {
  return {
    type: UPDATE_CARD,
    payload: card
  };
}
