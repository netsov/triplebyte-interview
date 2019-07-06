export function newCard(title, column) {
  return {
    title,
    column
  };
}

export function newColumn(title, backgroundColor, _id) {
  return {
    _id,
    title,
    backgroundColor
  };
}
