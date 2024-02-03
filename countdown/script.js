const timer = document.querySelector('.timer');

console.log(timer)
const minutesInput = document.querySelector('#minutes-input');
console.log(minutesInput)

const startButton = document.querySelector('form button[type="submit"]');
console.log(startButton)

const stopButton = document.querySelector('#stop-btn');
console.log(stopButton)

let countdownInterval;


const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const startCountdown = () => {
    const minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes < 1 || minutes > 60) {
      alert('Please enter a valid number of minutes between 1 and 60.');
      return;
    }
    let seconds = minutes * 60;
    countdownInterval = setInterval(() => {
      seconds--;
      const formattedMinutes = formatTime(Math.floor(seconds / 60));
      const formattedSeconds = formatTime(seconds % 60);
      timer.textContent = `${formattedMinutes}:${formattedSeconds}`;
      if (seconds === 0) {
        clearInterval(countdownInterval);
        alert('Time is up!');
<<<<<<< HEAD
        timer.textContent = '';
=======
        timer.textContent = '00:00';
>>>>>>> 58374184038183dd9085445f7292d4afe60479e3
      }
    }, 1000);
  };
  
  const stopCountdown = () => {
    clearInterval(countdownInterval);
    timer.textContent = '00:00';
    minutesInput.value = '';
  };
  
  startButton.addEventListener('click', event => {
    event.preventDefault();
    startCountdown();
  });
  
  stopButton.addEventListener('click', stopCountdown);
  