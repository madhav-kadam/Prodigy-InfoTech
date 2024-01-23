let timer;
    let isRunning = false;
    let seconds = 0;
    let laps = [];

    function startStop() {
      if (isRunning) {
        clearInterval(timer);
        document.querySelector('#buttons button:nth-child(1)').textContent = 'Start';
      } else {
        timer = setInterval(updateTime, 1000);
        document.querySelector('#buttons button:nth-child(1)').textContent = 'Stop';
      }
      isRunning = !isRunning;
    }

    function recordLap() {
      if (isRunning) {
        laps.push(formatTime(seconds));
        updateLaps();
      }
    }

    function reset() {
      clearInterval(timer);
      isRunning = false;
      seconds = 0;
      laps = [];
      document.querySelector('#buttons button:nth-child(1)').textContent = 'Start';
      updateDisplay();
      updateLaps();
    }

    function updateTime() {
      seconds++;
      updateDisplay();
    }

    function formatTime(timeInSeconds) {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function updateDisplay() {
      document.querySelector('#display').textContent = formatTime(seconds);
    }

    function updateLaps() {
      const lapsContainer = document.querySelector('#laps');
      lapsContainer.innerHTML = '';
      laps.forEach((lap, index) => {
        const lapElement = document.createElement('div');
        lapElement.textContent = `Lap ${index + 1}: ${lap}`;
        lapsContainer.appendChild(lapElement);
      });
    }