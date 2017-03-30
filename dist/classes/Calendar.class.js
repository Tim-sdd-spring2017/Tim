// TODO: add member variables and complete functions
function Calendar() {
  // this.events = [];
  // this.repeatedEvents = [];
  this.eventContainer = new EventContainer();

  this.addEvent = function(e, repeats) {
      this.eventContainer.addEvent(e, repeats);
  };

  // TODO: handle repeated events
  this.getEvents = function() {
    // returns a copy of events; may need better ways of copying    
    return this.eventContainer.getEvents();
  };

  // TODO: handle repeated events
  this.removeEvent = function(index) {
    // if (index >= 0 && index < this.events.length) {
    //   this.events.splice(index,1);
    // }
    this.eventContainer.removeEvent(index);
  };

  // TODO: handle repeated events
  this.getNumEvents = function() {
    return this.eventContainer.getNumEvents();
  };
}

module.exports = Calendar;
