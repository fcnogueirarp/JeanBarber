import styles from './Logo.module.css';
import logomarca from '../assets/img/logomarca1.jpg';

import React from 'react';
import { Box } from '@mui/system';

export default function Logo() {
  return (
    <Box className={styles.container}>
      <img className={styles.logo} src={logomarca} alt="logo" />
    </Box>
  );
}
