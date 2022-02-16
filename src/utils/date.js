import { lastDayOfMonth as lastDay } from 'date-fns';

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const nextWeek = [localStorage.getItem('nextWeek')];
const nextWeekClicked = localStorage.getItem('nextWeekClicked');

const lastDayOfMonth = lastDay(today).getDate();
const daysOfMonth = [day]; //since day acurrent to final date of month

const months = [
  'JANEIRO',
  'FEVEREIRO',
  'MARÇO',
  'ABRIL',
  'MAIO',
  'JUNHO',
  'JULHO',
  'AGOSTO',
  'SETEMBRO',
  'OUTUBRO',
  'NOVEMBRO',
  'DEZEMBRO',
];

const week = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
const dayOfWeek = today.getDay(); //getDay return day of week where 0 = Sunday
let EqDaysOfWeekC = [];

let daysOfWeek = [];

let EqDaysOfWeek = [];

let j = 0;

(function datetime(number) {
  for (let i = day + 1; i <= lastDayOfMonth; i++) {
    daysOfMonth.push(i);
  }

  daysOfWeek = [...daysOfMonth].splice(`${number}`, 7);
  //console.log('daysOfWeek ' + daysOfWeek);

  const nextWeek = [...daysOfMonth].splice(7, 7);
  console.log(nextWeek);

  //  console.log('TODAY ' + today);
  //  console.log('daysOfMonth ' + daysOfMonth);
  // console.log('dayOfWeek ' + dayOfWeek);

  // console.log(EqDaysOfWeek.length);

  for (let i = dayOfWeek; i <= lastDayOfMonth; i++) {
    if (EqDaysOfWeek.length < 7) {
      if (i <= 6) {
        EqDaysOfWeek.push(i);
      } else {
        EqDaysOfWeek.push(j);
        j++;
      }
    }
  }

  // console.log('EqDaysOfWeek ' + EqDaysOfWeek);

  EqDaysOfWeekC = [...EqDaysOfWeek];
  //console.log('EqDaysOfWeekC ' + EqDaysOfWeekC);
})();

export function getMonthsYear() {
  return (
    <div>
      <strong>{months[month] + ' ' + year}</strong>
    </div>
  );
}

export function setNameOfDaysOfWeek() {
  return (
    <>
      {EqDaysOfWeekC.map(day => (
        <span>
          <strong>{week[day]}</strong>
        </span>
      ))}
    </>
  );
}

export function setDaysOfWeekInNumber() {
  return (
    <>
      {daysOfWeek.map(day => (
        <span>{day}</span>
      ))}
    </>
  );
}
