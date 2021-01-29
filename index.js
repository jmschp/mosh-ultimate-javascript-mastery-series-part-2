function StopWatch() {
  this.duration = 0;
  this.start = () => {
    startTime = new Date();
  };
  this.stop = () => {
    stopTime = new Date();
    this.duration = stopTime - startTime;
  };
  this.reset = () => {
    this.duration = 0;
  };
}

// const sw = new StopWatch();

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  this.start = () => {
    if (running) throw new Error("Stopwatch is already started");
    running = true;
    startTime = new Date();
  };
  this.stop = () => {
    if (!running) throw new Error("Stopwatch is already stopped");
    running = false
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds
  };
  this.reset = () => {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
}
