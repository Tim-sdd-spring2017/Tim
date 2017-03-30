function EventContainer(startTime, endTime) {
  this.startTime = startTime;
  this.endTime = endTime;
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
      var t = new Date(this.startTime);
      while (newEvent.getStartTime() < Math.min(this.endTime, r.endDate)) {
        newEvent = r.event.clone(r);
        this.insert(newEvent);
      }
    });
    return this.events;
  };

  this.insert = function(e) {
    var mid, lo = 0,
        hi = events.length-1;
    while(lo <= hi) {
      mid = Math.floor((lo+hi)/2);
      if (events[mid].getStartTime() > e.getStartTime()) {
        hi = mid-1;
      } else if (events[mid].getStartTime() < e.getStartTime()) {
        lo = mid+1;
      } else {
        this.events.splice(mid, 0, e);
        return mid;
      }
    }
    this.events.insert(lo, 0, e);
    return lo;
  };
}
module.exports = EventContainer;
