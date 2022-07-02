import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]')
const inputTimer = document.querySelector('#datetime-picker');
const timerDisplay = {
    day: document.querySelector(`[data-days]`),
    hours: document.querySelector(`[data-hours]`),
    minutes: document.querySelector(`[data-minutes]`),
    seconds: document.querySelector(`[data-seconds]`),
}

startBtn.disabled = true;
let ms = 0;
let selectedTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] <= Date.now()) {
          Notify.failure(`Please choose a date in the future`)
      }
      else {
          startBtn.disabled = false;
          selectedTime = selectedDates[0]
      }
  },
};

flatpickr("#datetime-picker", options)


startBtn.addEventListener('click', clickStart)

function clickStart() {
    startBtn.disabled = true;
    
    setInterval(() => {
    
        ms = selectedTime - Date.now();
        if (ms > 0) {
            inputTimer.disabled = true;
        } else {
            inputTimer.disabled = false;
        }

        let { days, hours, minutes, seconds } = convertMs(ms);
        timerDisplay.day.textContent = days;
        timerDisplay.hours.textContent = hours;
        timerDisplay.minutes.textContent = minutes;
        timerDisplay.seconds.textContent = seconds;

    }, 1000);
    
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    // console.log({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
