import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AccordionP from '../components/AccordionP';

import styles from './Schedule.module.css';

export default function Schedule() {
  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <AccordionP />
      </Container>
    </Box>
  );
}
