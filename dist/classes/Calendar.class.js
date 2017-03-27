// TODO: add member variables and complete functions
function Calendar() {
  this.events = [];
  this.addEvent = function(e) {
    this.events.push(e);
  };

  this.getEvents = function() {
    // returns a copy of events; may need better ways of copying    
    return this.events.slice();
  };

  this.removeEvent = function(index) {
    if (index >= 0 && index < this.events.length) {
      this.events.splice(index,1);
    }
  };

  this.getNumEvents = function() {
    return this.events.length;
  };
}

module.exports = Calendar;
