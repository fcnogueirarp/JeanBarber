import React from 'react';
import styles from './About.module.css';

import photo from '../assets/img/draw.png';
import Whatsapp from '../components/Whatsapp';

export default function About() {
  return (
      <section className={styles.container}>
        <div className={styles.container_news}>
          <h1>JEAN BARBER</h1>
          <figure className={styles.container_figure}>
            <img
              className={styles.photo}
              src={photo}
              alt="logo homem de barba"
            />
            <article>
              Localizada no bairro <strong>Jardim Arlindo Laguna</strong> na
              cidade de
              <strong> Ribeirão Preto</strong>, a <strong>JEAN BARBER</strong>{' '}
              traz para o mercado cortes modernos para o seu cabelo e barba.
              Fundada em 2019, a Jean Barber já é destaque na cidade e conquista
              novos clientes a cada dia. Nossa missão é: "Proporcionar
              auto-estima e qualidade de vida aos clientes". O atendimento
              possui padrão de excelência e agilidade, garantindo qualidade e
              satisfação.
            </article>
          </figure>
        </div>

        <Whatsapp />
      </section>
  );
}
