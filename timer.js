class CountdownTimer {
    constructor({selector, targetDate}){
      this.selector = selector;
      this.targetDate = targetDate;
      this.intervalId = null;
    }
  
    getRefs () {
      const timerContainer = document.querySelector(this.selector)
      const timerDays = timerContainer.querySelector('[data-value="days"]');
      const timerHours = timerContainer.querySelector('[data-value="hours"]');
      const timerMins = timerContainer.querySelector('[data-value="mins"]');
      const timerSecs = timerContainer.querySelector('[data-value="secs"]');
      
      return {timerContainer, timerDays, timerHours, timerMins, timerSecs};
    }
  
    updateTimer ({timerContainer, timerDays, timerHours, timerMins, timerSecs}) {
      const time = this.targetDate - Date.now();
      if (time < 0) {
          this.stop(timerContainer);
          return
      }
      timerDays.textContent = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      timerHours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      timerMins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      timerSecs.textContent = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
      
    }

    start () {
        this.intervalId = setInterval(() => {
            this.updateTimer(this.getRefs())
        }, 1000);
    }

    stop (timerContainer) {
        clearInterval(this.intervalId);
        timerContainer.innerHTML = "<h1>You're out of time!</h1>";
        
    }
  }
  
       
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 23, 2021'),
  });
  
  timer.start();