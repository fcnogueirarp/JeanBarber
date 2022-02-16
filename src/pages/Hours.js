import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import styles from './Hours.module.css';

export default function Hours() {
  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <h1>Horário de atendimento</h1>
      </Container>
      <ul>
        <li>
          <strong>DOM</strong> <br /> -
        </li>
        <li>
          <strong>SEG</strong> <br /> -
        </li>
        <li>
          <strong>TER</strong> <br /> 08:30 - 18:30
        </li>
        <li>
          <strong>QUA</strong> <br /> 08:30 - 18:30
        </li>
        <li>
          <strong>QUI</strong> <br /> 08:30 - 18:30
        </li>
        <li>
          <strong>SEX</strong> <br /> 08:30 - 19:00
        </li>
        <li>
          <strong>SAB</strong> <br /> 08:30 - 19:00
        </li>
      </ul>
    </Box>
  );
}
