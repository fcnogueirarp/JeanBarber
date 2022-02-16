import * as React from 'react';
import styles from './Home.module.css';
import Logo from '../components/Logo';
import photo from '../assets/img/principal.png';
import Whatsapp from '../components/Whatsapp';
import styleText from '../assets/img/styleText.png';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <Box className={styles.home}>
      <Logo className={styles.logo} />
      <div className={styles.container_photos}>
        <img
          className={styles.photo}
          src={photo}
          alt="homem com a barba bem feita"
        />
        <img className={styles.photo} src={styleText} alt="texto estilizado" />
      </div>
      <Whatsapp />
    </Box>
  );
}
