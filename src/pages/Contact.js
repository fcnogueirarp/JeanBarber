import styles from './Contact.module.css';

import React from 'react';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import screenWhatsapp from '../../src/assets/img/screenWhatsapp.png';

export default function Contact() {
  const variable =
    'Olá! Estou entrando em contato através do site da Jean Barber';

  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <Container className={styles.container_contacts}>
          <Container className={styles.contacts}>
            <h1>Contatos</h1>
            <br />
            Telefone/Whatsapp: (16) 99368-0212 <br />
            <br />
            R. Luiz Granatto, 1037 - <br />
            Jardim Arlindo Laguna, <br />
            Ribeirão Preto - SP,
            <br />
            <br />
          </Container>
          <Container className={styles.map}>
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.807092963922!2d-47.848865!3d-21.144367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x971354c41ec3b758!2sJEAN%20BARBER%20SHOP!5e0!3m2!1spt-BR!2sbr!4v1644069995931!5m2!1spt-BR!2sbr"></iframe>
          </Container>
        </Container>

        <Container className={styles.container_form}>
          <form className={styles.form}>
            <h1>Deixe seu recado</h1>

            <a
              href={`https://web.whatsapp.com/send?phone=5516993680212&text=${variable}&source=&data=`}
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.photo} src={screenWhatsapp} />
            </a>
          </form>
        </Container>
      </Container>
    </Box>
  );
}
