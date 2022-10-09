export default class Timer {
  start: number

  constructor() {
    this.start = -1
  }

  startTimer() {
    this.start = Date.now()
  }

  endTimer() {
    return Date.now() - this.start
  }
}
