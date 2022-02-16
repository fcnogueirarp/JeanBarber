import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Reserve from '../components/Reserve';

import styles from './Schedule.module.css';

export default function Schedule() {
  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <Reserve />
      </Container>
    </Box>
  );
}
