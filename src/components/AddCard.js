import React from 'react';

import { connect } from 'react-redux';
import { addCard } from '../redux/actions';

const AddCard = ({ addCard, column }) => {
  return (
    <div>
      <button
        onClick={() => {
          const title = prompt('Please enter your card name');

          console.log(title);

          addCard(title, column);
        }}
      >
        Add Card
      </button>
    </div>
  );
};

export default connect(null, { addCard })(AddCard);
