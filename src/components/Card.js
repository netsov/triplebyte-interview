import React from 'react';
import './Card.css';

import { connect } from 'react-redux';
import { moveCard } from '../redux/actions';

const Card = ({ card, moveCard, showLeft, showRight }) => {
  return (
    <div className="card">
      {showLeft && <button onClick={() => moveCard(card, -1)}>&lt;</button>}
      <span className="cardTitle">{card.title}</span>
      {showRight && <button onClick={() => moveCard(card, 1)}>&gt;</button>}
    </div>
  );
};

export default connect(null, { moveCard })(Card);
