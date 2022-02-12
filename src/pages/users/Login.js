import { Box } from '@mui/system';
import { Container } from '@mui/material';
import Logo from '../../components/Logo';
import styles from './Login.module.css';
import { useContext, useEffect, useState } from 'react';
import api from '../../utils/api';

import { Context } from '../../context/userContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const { login } = useContext(Context);

  useEffect(() => {
    api
      .post('/users/login', {
        email: email,
        password: password,
      })
      .then(response => setUser(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);
  console.log(user);

  function handleChange(e) {
     setUser({...user, [e.target.name]: e.target.value})  
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }
  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.container_logo}>
          <Logo className={styles.logo} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={handleChange}
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={handleChange}
          />
          <input className={styles.button} type="submit" value="ENTRAR" />
        </form>
        <h3>
          Ainda não Possui Cadastro ? <a href="/register">Clique aqui</a> para
          cadastrar
        </h3>
      </Container>
    </Box>
  );
}
