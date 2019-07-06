import React from 'react';

import './Column.css';
import { connect } from 'react-redux';
import Card from './Card';
import AddCard from './AddCard';

const Column = ({ column, cards, showLeft, showRight }) => {
  return (
    <div className="column">
      <h4 style={{ backgroundColor: column.backgroundColor }}>
        {column.title}
      </h4>
      <div>
        {cards.map(card => (
          <Card
            key={card._id}
            card={card}
            showLeft={showLeft}
            showRight={showRight}
          />
        ))}
        <AddCard column={column} />
      </div>
    </div>
  );
};

function isFirstColumn(column, columns) {
  return columns.findIndex(c => c._id === column._id) === 0;
}
function isLastColumn(column, columns) {
  return columns.findIndex(c => c._id === column._id) === columns.length - 1;
}

function mapStateToProps(state, props) {
  return {
    cards: state.cards.filter(card => card.column === props.column._id),
    showLeft: !isFirstColumn(props.column, state.columns),
    showRight: !isLastColumn(props.column, state.columns)
  };
}

export default connect(mapStateToProps)(Column);
