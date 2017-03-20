function Task() {
  this.title = "Foobar";
  this.startTime = new Date( 1999, 11, 31, 23, 59, 59, 0 );
  this.endTime = new Date( 2000, 1, 1, 0, 0, 0, 0 );
  this.subtasks = [];
  this.notes = [];
}
