import { Injectable } from '@angular/core';

interface Intervalo{
  v: number;
}

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;
  intervalo: number;
  

  constructor() {  

  }

  getIntervalo() {
    return this.intervalo;
  }

  start(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        
        this.counter++;
      }, ms);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  reset() {
    if (this.timer != 0) this.counter = 0;
  }

  getCount() {
    return this.counter;
  }
}
