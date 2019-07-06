import React from 'react';
import { connect } from 'react-redux';
import Column from './Column';
import { fetchCards } from '../redux/actions';

class Columns extends React.Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    const { columns } = this.props;
    return (
      <main>
        {columns.map(column => <Column key={column.id} column={column} />)}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    columns: state.columns
  };
}

export default connect(mapStateToProps, { fetchCards })(Columns);
