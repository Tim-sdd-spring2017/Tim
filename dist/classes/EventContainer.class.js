function EventContainer(startTime, endTime) {
  this.startTime = new Date(startTime);
  this.endTime = new Date(endTime);
  this.events = [];  // events that do not repeat
  this.rules = [];   // events that repeat
  this.addEvent = function(e, repeats) {
    if (typeof repeats === "undefined") {
      // make sure it is sorted
      this.insert(e);
    }
    else {
      this.rules.push({event:e, rule:repeats});
    }
  };

  this.getRule = function(index) {
    return this.rules[index].rule;
  };

  this.getEvents = function() {
    this.rules.forEach(function(r) {
      var newEvent = r.event.clone();
      while (newEvent.getStartTime().getTime() < Math.min(this.endTime.getTime(), r.rule.endDate.getTime())) {
        newEvent = newEvent.clone(r.rule);
        this.insert(newEvent);
      }
    }, this);
    return this.events;
  };

  this.getNumEvents = function() {
    return this.getEvents().length;
  };

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

  // Removes event by id
  // return true if an event is removed; false otherwise
  this.removeEvent = function(id) {
    flag = false;
    for (i=0; i<this.events.length; i++) {
      if (this.events[i].getEventId() === id) {
        this.events.splice(i, 1);
        flag = true;
        break;
      }
    }
    return flag;
  };
}

module.exports = EventContainer;
