import styles from './Order.module.css';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import _ from 'lodash';
import { useContext, useState } from 'react';
import { Context } from '../context/userContext';

export default function Order() {
  const { logout } = useContext(Context);

  const [message, setMessage] = useState('');
  const services = [];

  const day = localStorage.getItem('day');
  const hour = localStorage.getItem('hour');
  const monthYearBeforeParse = localStorage.getItem('monthYear');

  const monthYearAfterParse = JSON.parse(monthYearBeforeParse);
  const monthYear = monthYearAfterParse.props.children.props.children;

  const nome = 'Teste';

  const user = localStorage.getItem('user');

  (function separatorServiceValue() {
    for (let i = 1; i < 6; i++) {
      if (localStorage.getItem('service' + i) !== null) {
        services.push(localStorage.getItem('service' + i).split('*'));
      }
    }
  })();

  let service = [];
  for (let i = 0; i < services.length; i++) {
    service.push(services[i][0]);
  }

  let values = [];
  for (let i = 0; i < services.length; i++) {
    values.push(parseInt(services[i][1]));
  }

  console.log(service);
  const total = 'R$ ' + _.sum(values) + ',00';

  const order = `Olá! me chamo ${nome} - 
  Reserva de ${service} - ${day} de ${monthYear} às ${hour} - à pagar ${total} ----- ${message}`;

  function handleChangeMessage(e) {
    const message = e.target.value;
    setMessage(message);
  }

  function handleClickCleanStorage() {
    logout(user);
  }

  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <h3>
          Olá <span className={styles.color}>{nome}</span>
        </h3>
        <h3>
          Confirma o agendamento de{' '}
          <span className={styles.color}>{service + ' '}</span> ?
        </h3>
        <h3>
          Dia:{' '}
          <span className={styles.color}>
            {' '}
            {day} de {monthYear}
          </span>
        </h3>
        <h3>
          Horário:<span className={styles.color}> {hour}</span>
        </h3>
        <h3>Total à pagar</h3>
        <h3>
          <span className={styles.color}>{total}</span>
        </h3>
        <form>
          <label>Mensagem para empresa: (opcional)</label>
          <input onChange={handleChangeMessage} />
          <label>
            Você já fez corte de cabelo ou barba anteriormente na Jean Barber?
          </label>
          <fildset className={styles.fieldset}>
            <div className={styles.checkbox}>
              <input type="radio" name="cut" value="sim" />
              SIM
              <input type="radio" name="cut" value="não" /> NÃO
            </div>
          </fildset>

          <label>Gostaria de receber nossas promoções?</label>
          <fildset className={styles.fieldset}>
            <div className={styles.checkbox}>
              <input type="radio" name="promotion" value="sim" />
              SIM
              <input type="radio" name="promotion" value="não" /> NÃO
            </div>
          </fildset>

          <a
            onClick={handleClickCleanStorage}
            className={styles.button2}
            href={`https://web.whatsapp.com/send?phone=5516993680212&text=${order}&source=&data=`}
            target="_blank"
            rel="noreferrer"
          >
            Confirmar
          </a>
        </form>
        <a href="/agenda">Voltar</a>
      </Container>
    </Box>
  );
}
