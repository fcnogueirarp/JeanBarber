import styles from './Logo.module.css';
import logomarca from '../assets/img/logomarca1.jpg';

import React from 'react';

export default function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logomarca} alt="logo" />
    </div>
  );
}
