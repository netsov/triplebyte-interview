import React from 'react';

import { connect } from 'react-redux';
import { addCard } from '../redux/actions';

import './AddCard.css';

const AddCard = ({ addCard, column }) => {
  return (
    <div>
      <button
        className="add-card"
        onClick={() => {
          const cardTitle = prompt('Please enter your card name');
          if (cardTitle) addCard(cardTitle, column.id);
        }}
      >
        Add Card
      </button>
    </div>
  );
};

export default connect(null, { addCard })(AddCard);
