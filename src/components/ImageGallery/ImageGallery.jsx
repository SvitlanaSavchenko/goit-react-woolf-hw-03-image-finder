import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './Gallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          alt={image.alt}
          onClick={() => onImageClick(image.webformatURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
