import React from 'react';

import './Column.css';
import * as column from '../columns';

const headerClasses = {
  [column.CARD_A]: 'headerA',
  [column.CARD_B]: 'headerB',
  [column.CARD_C]: 'headerC',
  [column.CARD_D]: 'headerD'
};

export const Column = ({ name, children }) => {
  return (
    <div className="column">
      <h4 className={headerClasses[name]}>{name}</h4>
      <div>{children}</div>
    </div>
  );
};
