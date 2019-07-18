import React from 'react';

import { connect } from 'react-redux';
import { addCard } from '../redux/actions';

import './AddCard.css';

class AddCard extends React.Component {
  state = {
    modalIsOpen: false
  };

  ref = React.createRef();

  handleEscape = e => {
    if (e.key === 'Escape') this.closeModal();
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
    document.addEventListener('keydown', this.handleEscape);
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    document.removeEventListener('keydown', this.handleEscape);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCard(this.ref.current.value, this.props.column._id);
    this.closeModal();
  };

  renderModal = () => {
    return (
      <div className="modal">
        <div id="result" className="modal-content">
          <h3>Add Card</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Please enter your card name"
              ref={this.ref}
              autoFocus
              required
            />
            <div className="actions">
              <button onClick={this.closeModal}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  render() {
    const { modalIsOpen } = this.state;
    return (
      <div>
        <button className="add-card" onClick={this.openModal}>
          Add Card
        </button>
        {modalIsOpen && this.renderModal()}
      </div>
    );
  }
}

export default connect(null, { addCard })(AddCard);
