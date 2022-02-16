import styles from './Whatsapp.module.css';
import React from 'react';
import whats from '../assets/img/whats.png';

export default function Whatsapp() {
  return (
    <div className={styles.container_whats}>
     <a href="https://web.whatsapp.com/send?phone=5516993680212&text=Olá gostaria de agendar um corte de cabelo&source=teste&data=teste" target="_blank">
        <img
          className={styles.whats}
          src={whats}
          alt="Atendimento pelo whatsapp"
        />
      </a>
    </div>
  );
}
