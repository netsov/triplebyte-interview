import React from 'react';
import { connect } from 'react-redux';
import Column from './Column';

const Columns = ({ columns }) =>
  columns.map(column => <Column key={column.id} column={column} />);

function mapStateToProps(state) {
  return {
    columns: state.columns
  };
}

export default connect(mapStateToProps)(Columns);
