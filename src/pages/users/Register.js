import { Box } from '@mui/system';
import { Container } from '@mui/material';
import styles from './Register.module.css';
import { useContext, useEffect, useState } from 'react';

import { Context } from '../../context/userContext';
import api from '../../utils/api';

export default function Register() {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    register(user);
  }

  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Foto:</label>
          <input type="file" name="photo" /> */}
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" required onChange={handleChange} />
          <label htmlFor="email">E-Mail:</label>
          <input type="email" name="email" required onChange={handleChange} />
          <label htmlFor="phone">Telefone:</label>
          <input type="text" name="phone" required onChange={handleChange} />
          <label htmlFor="city">Cidade:</label>
          <input type="text" name="city" required onChange={handleChange} />
          <label htmlFor="neighbor">Bairro:</label>
          <input type="text" name="neighbor" required onChange={handleChange} />
          <label htmlFor="CEP">CEP:</label>
          <input type="text" name="CEP" required onChange={handleChange} />
          <label htmlFor="street">Rua:</label>
          <input type="text" name="street" required onChange={handleChange} />
          <label htmlFor="number">Número:</label>
          <input type="number" name="number" required onChange={handleChange} />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Digite sua senha"
            onChange={handleChange}
            required
          />
          <div className={styles.container_checkbox}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="subscribe"
              value="newsletter"
              checked
            />
            <label htmlFor="subscribeNews"> Receber oferta de produtos? </label>
          </div>
          <button className={styles.button} type="submit">
            CADASTRAR
          </button>
        </form>
      </Container>
    </Box>
  );
}
