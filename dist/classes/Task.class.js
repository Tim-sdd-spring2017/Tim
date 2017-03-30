// TODO: add member variables and complete functions
function Task(t, st, et) {
  // If a title isn't passed in
  if (typeof t === "undefined") {
    this.title = "Untitled";
  }
  else {
    this.title = t;
  }
  // If a start time isn't passed in
  if (typeof st === "undefined") {
    this.startTime = new Date();
  }
  else {
    this.startTime = st;
  }
  // If a end time isn't passed in
  if (typeof et === "undefined") {
    this.endTime = new Date();
  }
  else {
    this.endTime = et;
  }
  this.notes = [];
  // Generate random id based on time in milliseconds
  this.id = new Date().getTime();

  this.getTitle = function() {
    return this.title;
  };
  this.setTitle = function(t) {
    this.title = t;
  };
  this.getStartTime = function() {
    return new Date(this.startTime);
  };
  this.setStartTime = function(st) {
    this.startTime = st;
  };
  this.getEndTime = function() {
    return new Date(this.endTime);
  };
  this.setEndTime = function(et) {
    this.endTime = et;
  };
  this.getTaskId = function() {
    return this.id;
  };
}

module.exports = Task;
