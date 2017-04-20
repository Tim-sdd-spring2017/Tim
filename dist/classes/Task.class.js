// TODO: add member variables and complete functions
function Task(t, dur) {

  this.title = t;
  this.duration = dur;
  this.startTime;
  this.endTime;

  this.notes = [];
  // Generate random id based on time in milliseconds
  this.id = new Date().getTime();

  this.getTitle = function() {
    return this.title;
  };

  this.setTitle = function(t) {
    this.title = t;
  };

  this.getDuration = function() {
    return this.duration;
  };

  this.setDuration = function(dur) {
    this.duration = dur;
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
}

module.exports = Task;
