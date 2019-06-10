import React from 'react';
import './Card.css';

import { connect } from 'react-redux';
import { updateCard } from '../redux/actions';

import * as columns from '../columns';

function getNewColumn(card, diff) {
  const curIndex = columns.ALL.indexOf(card.column);
  return columns.ALL[curIndex + diff];
}

const Card = ({ card, updateCard, showLeft, showRight }) => {
  return (
    <div className="card">
      {showLeft && (
        <button
          onClick={() => {
            updateCard({ ...card, column: getNewColumn(card, -1) });
          }}
        >
          left
        </button>
      )}
      {card.title}
      {showRight && (
        <button
          onClick={() => {
            updateCard({ ...card, column: getNewColumn(card, 1) });
          }}
        >
          right
        </button>
      )}
    </div>
  );
};

export default connect(null, { updateCard })(Card);
