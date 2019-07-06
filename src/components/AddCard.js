import React from 'react';

import { connect } from 'react-redux';
import { addCard } from '../redux/actions';

import './AddCard.css';

class AddCard extends React.Component {
  state = {
    modalIsOpen: false,
    input: ''
  };

  handleEscape = e => {
    if (e.key === 'Escape') this.closeModal();
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
    document.addEventListener('keydown', this.handleEscape);
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, input: '' });
    document.removeEventListener('keydown', this.handleEscape);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addCard, column } = this.props;
    addCard(this.state.input, column._id);
    this.closeModal();
  };

  handleChange = e => this.setState({ input: e.target.value });

  renderModal = () => {
    return (
      <div className="modal">
        <div id="result" className="modal-content">
          <h3>Add Card</h3>
          <form>
            <input
              type="text"
              placeholder="Please enter your card name"
              value={this.state.input}
              onChange={this.handleChange}
              autoFocus
            />
            <div className="actions">
              <button onClick={this.closeModal}>Cancel</button>
              <button
                type="submit"
                onClick={this.handleSubmit}
                disabled={!this.state.input}
              >
                Submit
              </button>
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
