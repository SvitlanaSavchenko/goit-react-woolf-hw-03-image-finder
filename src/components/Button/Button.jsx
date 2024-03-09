import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, disabled, query }) => {
  const handleClick = () => {
    onClick(query);
  };
  return (
    <button
      type="button"
      className={styles.loadMore}
      onClick={handleClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
};

export default Button;
