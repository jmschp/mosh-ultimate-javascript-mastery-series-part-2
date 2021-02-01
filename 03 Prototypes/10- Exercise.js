// 10 - Exercise

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value
    }
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}

StopWatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch is already started");
  this.running = true;
  this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is already stopped");
  this.running = false;
  this.endTime = new Date();
  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};



const sw = new StopWatch();
sw.duration = 10;

// In this case of the Stop Watch the previous implementation was better.
// This case we end up exposing the duration property, that was a read only property.
// It broke the abstraction principle.
