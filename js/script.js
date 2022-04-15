const now = new Date();

const secondHand = document.getElementById('secondHand');
const minHand = document.getElementById('minHand');
const hourHand = document.getElementById('hourHand');

const digitalSec = document.getElementById('digitalSec');
const digitalMin = document.getElementById('digitalMin');
const digitalHours = document.getElementById('digitalHours');

let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let setDate = setInterval(() => {
  let date = new Date();

  let seconds = date.getSeconds();
  let secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if (seconds < 10) {
    digitalSec.innerText = '0' + seconds;
  } else {
    digitalSec.innerText = seconds;
  }

  let mins = date.getMinutes();
  let minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  if (mins < 10) {
    digitalMin.innerText = '0' + mins;
  } else {
    digitalMin.innerText = mins;
  }

  let hours = date.getHours();
  let hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  if (hours < 10) {
    digitalHours.innerText = '0' + hours;
  } else {
    digitalHours.innerText = hours;
  }

  let UTCDate = date.getUTCDate();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  let textDay = UTCDate + ' ' + months[month];

  document.getElementById('dateDay').innerText = days[day];
  document.getElementById('dateMonth').innerText = textDay;
  document.getElementById('dateYear').innerText = year;
}, 10);

function changeTheme() {
  document.getElementById('container').classList.toggle('light-mode');
  document.getElementById('clock').classList.toggle('light-clock');
  document.getElementById('clockTwo').classList.toggle('light-clock');
  document.getElementById('digital').classList.toggle('light-text');
  document.getElementById('dateDay').classList.toggle('light-text');
  document.getElementById('dateMonth').classList.toggle('light-text');
  document.getElementById('dateYear').classList.toggle('light-text');
  document.getElementById('digitalHours').classList.toggle('light-text');
  document.getElementById('digitalMin').classList.toggle('light-text');
  document.getElementById('pointOne').classList.toggle('light-text');
  document.getElementById('pointTwo').classList.toggle('light-text');
}
