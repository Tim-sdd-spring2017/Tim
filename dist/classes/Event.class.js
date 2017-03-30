// TODO: add member variables and complete functions
function Event(t, st, et) {
  if (typeof t === "undefined") {
    this.title = "Untitled";
  } 
  else {
    this.title = t;
  }
  if (typeof st === "undefined") {
    this.startTime = new Date();
  }
  else {
    this.startTime = st;
  }
  if (typeof et === "undefined") {
    this.endTime = new Date();
  }
  else {
    this.endTime = et;
  }
  this.notes = [];


  this.getTitle = function() {
    return this.title;
  };

  this.setTitle = function( t ) {
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
    // TODO: Need to make sure endTime is always later than startTime
  };

  this.addNote = function(n) {
    this.notes.push(n);
  };

  this.getNotes = function() {
    // returns a copy of notes; may need better ways of copying
    return this.notes.slice();
  };

  // Remove a note by its index
  this.removeNote = function(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index,1);
    }

  };

  this.getNumNotes = function() {
    return this.notes.length;
  };

  this.clone = function(rule) {
    if (typeof rule === "undefined") {
      return new Event(this.title, this.startTime, this.endTime);
    }
    else if (rule.time <= 0) {
      throw "rule.time <= 0";
    }
    return new Event(this.title, this.startTime+rule.time, this.endTime+tule.time);
  };
}

module.exports = Event;
