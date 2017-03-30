// TODO: add member variables and complete functions
if(typeof window === "undefined") {
  var EventContainer = require("./EventContainer.class");
}
function Calendar(container) {
  // this.events = [];
  // this.repeatedEvents = [];
  if (typeof container === "undefined") {
    this.eventContainer = new EventContainer(new Date(), new Date() + 12*3600*1000);
  }
  else {
    this.eventContainer = container;
  }

  this.addEvent = function(e, repeats) {
      this.eventContainer.addEvent(e, repeats);
  };

  // TODO: handle repeated events
  this.getEvents = function() {
    // returns a copy of events; may need better ways of copying
    return this.eventContainer.getEvents();
  };

  // TODO: handle repeated events
  this.removeEvent = function(id) {
    // if (index >= 0 && index < this.events.length) {
    //   this.events.splice(index,1);
    // }
    this.eventContainer.removeEvent(id);
  };

  // TODO: handle repeated events
  this.getNumEvents = function() {
    return this.eventContainer.getNumEvents();
  };
}

module.exports = Calendar;
