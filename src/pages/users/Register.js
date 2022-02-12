import { Box } from '@mui/system';
import { Container } from '@mui/material';
import styles from './Register.module.css';

export default function Register() {
  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <h1>Cadastro</h1>
        <form>
          <label for="name">Foto:</label>
          <input type="file" name="name" />
          <label for="name">Nome:</label>
          <input type="text" name="name" />
          <label for="email">E-Mail:</label>
          <input type="email" name="email" />
          <label for="phone">Telefone:</label>
          <input type="text" name="email" />
          <label for="city">Cidade:</label>
          <input type="text" name="city" />
          <label for="neighbor">Bairro:</label>
          <input type="text" name="neighbor" />
          <label for="CEP">CEP:</label>
          <input type="text" name="CEP" />
          <label for="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <label for="confirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <div className={styles.container_checkbox}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="subscribe"
              value="newsletter"
              checked
            />
            <label for="subscribeNews"> Receber oferta de produtos? </label>
          </div>
          <div className={styles.button} type="submit">
            CADASTRAR
          </div>
        </form>
      </Container>
    </Box>
  );
}
