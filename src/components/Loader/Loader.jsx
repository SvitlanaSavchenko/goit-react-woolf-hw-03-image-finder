import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Oval height={100} width={100} color="#4a61bd" ariaLabel="oval-loading" />
    </div>
  );
};

export default Loader;
