class CountdownTimer {
    constructor({selector, targetDate}){
      this.selector = selector;
      this.targetDate = targetDate;
    }
  
    getRefs () {
      const timerContainer = document.querySelector(this.selector)
      const timerDays = timerContainer.querySelector('[data-value="days"]');
      const timerHours = timerContainer.querySelector('[data-value="hours"]');
      const timerMins = timerContainer.querySelector('[data-value="mins"]');
      const timerSecs = timerContainer.querySelector('[data-value="secs"]');
      
      return {timerDays, timerHours, timerMins, timerSecs};
    }
  
    updateTimer ({timerDays, timerHours, timerMins, timerSecs}) {
      const time = this.targetDate - Date.now();
      timerDays.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      timerHours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       timerMins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        timerSecs.textContent = Math.floor((time % (1000 * 60)) / 1000);
      
    }

    start () {
        setInterval(() => {
            this.updateTimer(this.getRefs())
        }, 1000);
    }
  }
  
       
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 23, 2021'),
  });
  
  timer.start();