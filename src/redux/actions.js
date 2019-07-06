import { ADD_CARD, FETCH_CARDS, UPDATE_CARD } from './actionTypes';
import { newCard } from './utils';

export function addCard(title, column) {
  return {
    type: ADD_CARD,
    payload: newCard(title, column)
  };
}

export function moveCard(card, diff) {
  return (dispatch, getState) => {
    const { columns } = getState();
    const curIndex = columns.findIndex(c => c.id === card.column);

    dispatch({
      type: UPDATE_CARD,
      payload: { ...card, column: columns[curIndex + diff].id }
    });
  };
}

export function fetchCards() {
  return async dispatch => {
    const cards = await (await fetch('/cards')).json();

    console.log(cards);

    dispatch({
      type: FETCH_CARDS,
      payload: cards
    });
  };
}
