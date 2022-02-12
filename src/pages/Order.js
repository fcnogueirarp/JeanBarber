import styles from './Order.module.css';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

export default function Order() {
  const day = localStorage.getItem('day');
  const hour = localStorage.getItem('hour');
  const monthYearBeforeParse = localStorage.getItem('monthYear');
  const monthYearAfterParse = JSON.parse(monthYearBeforeParse);
  const monthYear = monthYearAfterParse.props.children.props.children;

  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <h3>Confirma o agendamento de SERVIÇO ?</h3>
        <h3>
          Dia: {day} de {monthYear}
        </h3>
        <h3>Horário: {hour}</h3>
        <h3>Total da Compra</h3>
        <form>
          <label>Mensagem para empresa: (opcional)</label>
          <input />
          <label>
            Você já fez corte de cabelo ou barba anteriormente na Jean Barber?
          </label>
          <input type="radio" />
          <label>Sim</label>
          <input type="radio" />
          <label>Não</label>
          <label>Gostaria de receber nossas promoções?</label>
          <input type="button" value="CONFIRMAR" />
        </form>
      </Container>
    </Box>
  );
}
