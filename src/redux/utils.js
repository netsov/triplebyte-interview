import uuid from 'uuid/v4';

export function newCard(title, column) {
  return {
    id: uuid(),
    title,
    column
  };
}

export function newColumn(title, backgroundColor) {
  return {
    id: uuid(),
    title,
    backgroundColor
  };
}
