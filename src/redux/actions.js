import { ADD_CARD, FETCH_CARDS, UPDATE_CARD } from './actionTypes';
import { newCard } from './utils';

export function addCard(title, column) {
  return async dispatch => {
    const response = await fetch('/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard(title, column))
    });

    if (!response.ok) {
      console.error(response);
      return;
    }

    const card = await response.json();

    dispatch({
      type: ADD_CARD,
      payload: card
    });
  };
}

export function moveCard(card, diff) {
  return async (dispatch, getState) => {
    const { columns } = getState();
    const curIndex = columns.findIndex(c => c._id === card.column);

    const response = await fetch(`/cards/${card._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ column: columns[curIndex + diff]._id })
    });

    if (!response.ok) {
      console.error(response);
      return;
    }

    const updatedCard = await response.json();

    dispatch({
      type: UPDATE_CARD,
      payload: updatedCard
    });
  };
}

export function fetchCards() {
  return async dispatch => {
    const cards = await (await fetch('/cards')).json();

    dispatch({
      type: FETCH_CARDS,
      payload: cards
    });
  };
}
