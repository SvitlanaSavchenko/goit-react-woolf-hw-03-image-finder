import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageUrl } = this.props;

    return (
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={this.handleClickOutside}
      >
        <div className={styles.modalContent}>
          <img className={styles.modalImage} src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
