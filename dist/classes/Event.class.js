/**
 * File: Event.class.js
 * Purpose: Event Class
 *
 * @param string   t  The title
 * @param Date     st The start time
 * @param Date     et The end time
 */
function Event(t, st, et) {
  // If a title isn't passed in
  this.title = (typeof t === "undefined") ?
    "Untitled" : t;

  // If a start time isn't passed in
  this.startTime = (typeof st === "undefined") ?
    new Date() : st;

  // If a end time isn't passed in
  this.endTime = (typeof et === "undefined") ?
    new Date() : et;

  this.notes = [];
  
  // Generate random id based on time in milliseconds
  this.id = new Date().getTime() + Math.floor(Math.random() * 1000);

  /**
   * Returns the id
   * @return int The id
   */
  this.getEventId = function() {
    return this.id;
  }

  /**
   * Gets the title
   * @return string The title
   */
  this.getTitle = function() {
    return this.title;
  };

  /**
   * Sets the title
   * @param  {[type]} t [description]
   * @return [type]     [description]
   */
  this.setTitle = function( t ) {
    this.title = t;
  };

  /**
   * Gets the start time
   * @return Date The start time
   */
  this.getStartTime = function() {
    return new Date(this.startTime);
  };

  /**
   * Sets the start time
   * @param  Date st The new start time
   */
  this.setStartTime = function(st) {
    this.startTime = new Date(st);
  };

  /**
   * Gets the end time
   * @return Date The end time
   */
  this.getEndTime = function() {
    return new Date(this.endTime);
  };

  /**
   * Sets the end time
   * @param  Date   et  The end time
   */
  this.setEndTime = function(et) {
    // TODO: Need to make sure endTime is always later than startTime
    this.endTime = new Date(et);
  };

  /**
   * Adds a note
   * @param  Note   n   The note to add
   */
  this.addNote = function(n) {
    this.notes.push(n);
  };

  /**
   * Gets the notes
   * @return Note[] The notes
   */
  this.getNotes = function() {
    // returns a copy of notes; may need better ways of copying
    return this.notes.slice();
  };

  /**
   * Sets the notes
   * @param  int     index  The index to be removed
   * @return bool           True if it was removed, False if not
   */
  this.removeNote = function(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index,1);
      return true;
    }
    return false;
  };

  /**
   * Gets the number of notes
   * @return int The number of notes
   */
  this.getNumNotes = function() {
    return this.notes.length;
  };

  /**
   * Creates a clone of the current object with optional rule
   * @param  rule:{time:int, endDate:Date} rule The rule for number of times to repeat
   * @return Event                              [description]
   */
  this.clone = function(rule) {
    // If no rule was passed in (exact copy)
    if (typeof rule === "undefined") {
      return new Event(this.title, new Date(this.startTime.getTime()), new Date(this.endTime.getTime()));
    }
    // Make sure the time isn't invalid
    else if (rule.time <= 0) {
      throw "rule.time <= 0";
    }
    // Next event based on the rule
    // TODO: check if new time is past "rule.endDate"
    return new Event(this.title, new Date(this.startTime.getTime()+rule.time), new Date(this.endTime.getTime()+rule.time));
  };
}

module.exports = Event;
