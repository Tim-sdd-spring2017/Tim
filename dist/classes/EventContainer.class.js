/**
 * File: EventContainer.class.js
 * Purpose: EventContainer Class
 *
 * @param Date     startTime The beginning bound of the EventContainer
 * @param Date     endTime   The end bound of the EventContainer
 */
 // Nodejs requirement for test case
if(typeof window === "undefined") {
  var Event = require("./Event.class");
}

function EventContainer(startTime, endTime) {
  this.startTime = new Date(startTime);
  this.endTime = new Date(endTime);
  this.events = [];  // events that do not repeat
  this.rules = [];   // events that repeat
  this.tasks = [];
  /**
   * Adds an event
   * @param  Event                            e       The event to add
   * @param  rule:{time:int, endDate:Date}    repeats The rule for repeating an event
   * @return int                              index   The index it was inserted at
   */
  this.addEvent = function(e, repeats) {
    if (typeof repeats === "undefined") {
      return this.insert(e);
    }
    else {
      return this.rules.push({event:e, rule:repeats}) - 1;
    }
  };

  /**
   * Gets the rule at a specific index
   * @param  int                            index  The index of the desired rule
   * @return rule:{time:int, endDate:Date}         The rule
   */
  this.getRule = function(index) {
    return this.rules[index].rule;
  };

  this.getTotalTaskTime = function() {
    var s = 0;
    for (var i = 0; i < this.tasks.length; i++) {
      s += this.tasks[i].getDuration();
    }
    return s;
  };

  this.addTaskBlocks = function() {
    var block;
    var totalTaskTime = this.getTotalTaskTime();
    if (totalTaskTime === 0) return;
    var scheduledTaskTime = 0;
    for (var i = 0; i < this.events.length-1; i++) {
      block = this.events[i+1].getStartTime().getTime() - this.events[i].getEndTime().getTime();
      if (block >= 1000*60*60) {
        if (scheduledTaskTime + block >= totalTaskTime) {
          this.insert(new Event("TaskBlock",this.events[i].getEndTime(), 
                                new Date(this.events[i].getEndTime().getTime() + totalTaskTime - scheduledTaskTime)));
          break;
        } else {
          this.insert(new Event("TaskBlock",this.events[i].getEndTime(), this.events[i+1].getStartTime()));
          scheduledTaskTime += block;
        }
      }
    }
  };

  /**
   * Gets the events
   * @return Event[] The events
   */
  this.getEvents = function() {
    this.rules.forEach(function(r) {
      var newEvent = r.event.clone();
      // TODO: make sure events aren't already added
      while (newEvent.getStartTime().getTime() < Math.min(this.endTime.getTime(), r.rule.endDate.getTime())) {
        newEvent = newEvent.clone(r.rule);
        this.insert(newEvent);
      }
    }, this);
    this.addTaskBlocks();
    return this.events.slice();
  };


  /**
   * Gets the number of events
   * @return int The number of events
   */
  this.getNumEvents = function() {
    return this.getEvents().length;
  };

  /**
   * Inserts an event and stores them in order
   * @param  Event    e The event
   * @return int        The index it was inserted at
   */
   this.insert = function(e) {
    var mid, lo = 0,
        hi = this.events.length-1;
    while(lo <= hi) {
      mid = Math.floor((lo+hi)/2);
      if (this.events[mid].getStartTime() > e.getStartTime()) {
        hi = mid-1;
      } else if (this.events[mid].getStartTime() < e.getStartTime()) {
        lo = mid+1;
      } else {
        this.events.splice(mid, 0, e);
        return mid;
      }
    }
    this.events.splice(lo, 0, e);
    return lo;
  };

  /**
   * Removes an event
   * @param  int     id  The id of the event to be removed
   * @return bool        True if the event was removed, False if not
   */
  this.removeEvent = function(id) {
    for (i=0; i<this.events.length; i++) {
      if (this.events[i].getEventId() === id) {
        this.events.splice(i, 1);
        return true;
      }
    }
    return false;
  };

  this.addTask = function(t) {
    this.tasks.push(t);
  };

  this.getTasks = function() {
    this.tasks.sort(function(a,b) {
      return a.getDeadline().getTime() < b.getDeadline().getTime();
    });
    return this.tasks.slice();
  };

  this.removeTask = function(id) {
    for (i=0; i<this.tasks.length; i++) {
      if (this.tasks[i].getTaskId() === id) {
        this.tasks.splice(i,1);
        return true;
      }
    }
    return false;
  };

  this.getNumTasks = function() {
    return this.tasks.length;
  };


}

module.exports = EventContainer;
