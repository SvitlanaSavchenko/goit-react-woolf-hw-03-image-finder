import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  const handleClick = () => {
    onClick(imageUrl);
  };
  return (
    <li className={styles.photoCard} onClick={handleClick}>
      <img className={styles.photoCardImage} src={imageUrl} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
