import { Box } from '@mui/system';
import { Container } from '@mui/material';
import Logo from '../../components/Logo';
import styles from './Login.module.css';
import { useContext, useState } from 'react';
import { Context } from '../../context/userContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(Context);

  const user = {
    email: email,
    password: password,
  };

  function handleChangeEmail(e) {
    const email = e.target.value;
    setEmail(email);
    console.log(email);
  }
  function handleChangePassword(e) {
    const password = e.target.value;
    setPassword(password);
    console.log(password);
  }
  function handleSubmit(e) {
    e.preventDefault();
    login(user);
    localStorage.setItem('user', user);
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
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={handleChangePassword}
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
export default Login;
