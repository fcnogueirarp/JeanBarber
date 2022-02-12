import { Container } from '@mui/material';
import { Box } from '@mui/system';

import styles from './Reserve.module.css';

import {
  getMonthsYear,
  setDaysOfWeekInNumber,
  setNameOfDaysOfWeek,
} from '../utils/date';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import getId from '../utils/uuid';

export default function Reserve() {
  const [day, setDay] = useState('');
  const [monthYear, setMonthYear] = useState('');
  const [hour, setHour] = useState('');
  const [reserve, setReserve] = useState({});

  useEffect(() => {
    setMonthYear(getMonthsYear());
  }, [reserve]);

  const navigate = useNavigate();

  const morning = ['08:30', '09:00', '10:00', '11:00', '12:00'];
  const afternoon = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:30'];

  function handleChangeDay(e) {
    const day = e.target.innerHTML;
    setDay(day);
    console.log(day);
    localStorage.setItem('day', day);
  }
  function handleChangeHour(e) {
    const hour = e.target.innerHTML;
    setHour(hour);
    console.log(hour);
    localStorage.setItem('hour', hour);
  }

  function handleButtonClickNextWeek(e) {
    alert('Você clicou');
  }

  function handleSubmit(e) {
    const reserve = { day, hour };
    setReserve(reserve);
    navigate('/order');
    localStorage.setItem ( "monthYear" , JSON.stringify(monthYear));
  }

  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <div>
          <strong>ESCOLHER UMA DATA E HORA</strong>
        </div>
        <br />
        {getMonthsYear()} {/*Fev 2022*/}
        <br />
        <form onSubmit={handleSubmit}>
          <div className={styles.week}>
            <div className={styles.week_name}>{setNameOfDaysOfWeek()}</div>

            <div className={styles.week_number} onClick={handleChangeDay}>
              {setDaysOfWeekInNumber()}
            </div>
            <div className={styles.button_container}>
              <div
                className={styles.button}
                onClick={handleButtonClickNextWeek}
              >
                Próxima Semana
              </div>
            </div>
          </div>
          <br />
          <div className={styles.week}>
            <div className={styles.week_number}>
              <strong>Manhã</strong>
            </div>
            <div className={styles.week_number} onClick={handleChangeHour}>
              {morning.map(hour => (
                <span key={getId()}>{hour}</span>
              ))}
            </div>
          </div>
          <br />
          <div className={styles.week}>
            <div className={styles.week_number}>
              <strong>Tarde</strong>
            </div>
            <div className={styles.week_number} onClick={handleChangeHour}>
              {afternoon.map(hour => (
                <span key={getId()}>{hour}</span>
              ))}
            </div>
          </div>
          <div className={styles.button_container_reserve}>
            <input
              className={styles.button_reserve}
              value="Confirmar"
              type="submit"
            />
          </div>
        </form>
      </Container>
    </Box>
  );
}
