/**
 * File: Calendar.class.js
 * Purpose: Calendar Class
 */
// Nodejs requirement for test case
if(typeof window === "undefined") {
  var EventContainer = require("./EventContainer.class");
}
/**
 * The Calendar holds tasks and an eventContainer which holds all the events
 * @param EventContainer container The container that will hold the events
 */
function Calendar(container) {
  // If a container isn't passed in (default value)
  if (typeof container === "undefined") {
    this.eventContainer = new EventContainer(new Date(), new Date() + 12*3600*1000);
  }
  else {
    this.eventContainer = container;
  }

  /**
   * Adds an event
   * @param  Event                e         The event to add
   * @param  rule:{time, endDate} repeats   The rule for time(s) to repeat.
   */
  this.addEvent = function(e, repeats) {
      this.eventContainer.addEvent(e, repeats);
  };

  /**
   * Gets the events
   * @return Event[] The events
   */
  this.getEvents = function() {
    // returns a copy of events; may need better ways of copying
    return this.eventContainer.getEvents();
  };

  // TODO: handle repeated events
  this.removeEvent = function(id) {
    this.eventContainer.removeEvent(id);
  };

  /**
   * Returns the number of events
   * @return int The number of events
   */
  this.getNumEvents = function() {
    return this.eventContainer.getNumEvents();
  };

  // NOTE: added because of test case
  // TODO: implement function
  this.addTask = function(t) {
  };
}

module.exports = Calendar;
