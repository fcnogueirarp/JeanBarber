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
  const [service, setService] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [day, setDay] = useState('');
  const [monthYear, setMonthYear] = useState('');
  const [hour, setHour] = useState('');
  const [reserve, setReserve] = useState({});


  const price1 = 25;
  const price2 = 20;
  const price3 = 30;

  const service1 = ' Corte de Cabelo' + ' - R$ ' + price1 + ',00';
  const service2 = ' Corte Degradê' + ' - R$ ' + price2 + ',00';
  const service3 = ' Raspar Cabelo' + ' - R$ ' + price3 + ',00';
  const service4 = ' Barba' + ' - R$ ' + price1 + ',00';
  const service5 = ' Barba Navalhado' + ' - R$ ' + price2 + ',00';

  useEffect(() => {
    setMonthYear(getMonthsYear());
  }, [reserve]);

  const navigate = useNavigate();

  const morning = ['08:30', '09:00', '10:00', '11:00', '12:00'];
  const afternoon = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:30'];

  function handleChangeDay(e) {
    toggleClick();

    const day = e.target.innerHTML;
    setDay(day);
    localStorage.setItem('day', day);
  }
  function handleChangeHour(e) {
    const hour = e.target.innerHTML;
    setHour(hour);
    localStorage.setItem('hour', hour);
  }

  function handleChangeService1(e) {
    const service = e.target.value;
    setService(service);
    localStorage.setItem('service1', service);
    if (e.target.checked === false) {
      localStorage.removeItem('service1', service);
    }
  }
  function handleChangeService2(e) {
    const service = e.target.value;
    setService(service);
    localStorage.setItem('service2', service);
    if (e.target.checked === false) {
      localStorage.removeItem('service2', service);
    }
  }
  function handleChangeService3(e) {
    const service = e.target.value;
    setService(service);
    localStorage.setItem('service3', service);
    if (e.target.checked === false) {
      localStorage.removeItem('service3', service);
    }
  }
  function handleChangeService4(e) {
    const service = e.target.value;
    setService(service);
    localStorage.setItem('service4', service);
    if (e.target.checked === false) {
      localStorage.removeItem('service4', service);
    }
  }
  function handleChangeService5(e) {
    const service = e.target.value;
    setService(service);
    localStorage.setItem('service5', service);
    if (e.target.checked === false) {
      localStorage.removeItem('service5', service);
    }
  }

  function handleSubmit(e) {
    const token = localStorage.getItem('token');
    if (token === undefined) {
      alert('undefined');
    } else {
      const reserve = { day, hour };
      setReserve(reserve);
      navigate('/login');
      localStorage.setItem('monthYear', JSON.stringify(monthYear));
    }
  }

  function handleChangeColor(e) {}

  function toggleClick() {
    if (clicked === true) {
      console.log(clicked);
      setClicked(false);
    } else {
      setClicked(true);
      console.log(clicked);
    }
  }
  return (
    <Box className={styles.box}>
      <Container className={styles.container}>
        <h4>MARQUE UM OU MAIS SERVIÇOS</h4>
        <form className={styles.form}>
          <div className={styles.container_title_price}>
            <h4 className={styles.title}>{service1}</h4>
            <div className={styles.container_checkbox}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={handleChangeService1}
                value={`${service1}*${price1}`}
              />
            </div>
          </div>
          <div className={styles.container_title_price}>
            <h4 className={styles.title}>{service2}</h4>
            <div className={styles.container_checkbox}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={handleChangeService2}
                value={`${service2}*${price2}`}
              />
            </div>
          </div>
          <div className={styles.container_title_price}>
            <h4 className={styles.title}>{service3}</h4>
            <div className={styles.container_checkbox}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={handleChangeService3}
                value={`${service3}*${price3}`}
              />
            </div>
          </div>
          <div className={styles.container_title_price}>
            <h4 className={styles.title}>{service4}</h4>
            <div className={styles.container_checkbox}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={handleChangeService4}
                value={`${service4}*${price1}`}
              />
            </div>
          </div>
          <div className={styles.container_title_price}>
            <h4 className={styles.title}>{service5}</h4>
            <div className={styles.container_checkbox}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={handleChangeService5}
                value={`${service5}*${price2}`}
              />
            </div>
          </div>
        </form>
        <div>
          <strong>ESCOLHER UMA DATA E HORA</strong>
        </div>
        <br />
        {getMonthsYear()} {/*Fev 2022*/}
        <br />
        <form onSubmit={handleSubmit}>
          <div className={styles.week}>
            <div className={styles.week_name}>{setNameOfDaysOfWeek()}</div>

            <div
              className={
                clicked ? styles.week_number_clicked : styles.week_number
              }
              onClick={handleChangeDay}
            >
              {setDaysOfWeekInNumber()}
            </div>
          </div>
          <br />
          <div className={styles.week}>
            <div className={styles.week_number}>
              <p>
                <strong>MANHÃ</strong>
              </p>
            </div>
            <div className={styles.week_number} onClick={handleChangeHour}>
              {morning.map(hour => (
                <span onClick={handleChangeColor} key={getId()}>
                  {hour}
                </span>
              ))}
            </div>
          </div>
          <br />
          <div className={styles.week}>
            <div className={styles.week_number}>
              <p>
                <strong>TARDE</strong>
              </p>
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
              value="CONFIRMAR"
              type="submit"
            />
          </div>
        </form>
      </Container>
    </Box>
  );
}
