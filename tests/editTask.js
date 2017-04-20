/***********************
 * Test editing a Task *
 ***********************/

var Task = require( "../dist/classes/Task.class" );
module.exports = function() {
  var title = "Test", actual = "Actual";
  var dur = 1000, actualDur = 2000;
  var deadline = new Date(), actualDeadline = new Date();
  var t = new Task( title, dur, deadline );
  t.setTitle( actual );
  t.setDuration(actualDur);
  t.setDeadline(actualDeadline);
  return (
    t.getTitle() === actual &&
    t.getDuration() === actualDur &&
    t.getDeadline() === actualDeadline
  );
};
