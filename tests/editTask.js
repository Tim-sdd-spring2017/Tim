/***********************
 * Test editing a Task *
 ***********************/

var Task = require( "../dist/classes/Task.class" );
module.exports = function() {
  var title = "Test", actual = "Actual";
  var dur = 1000, actualDur = 2000;
  var t = new Task( title, dur );
  t.setTitle( actual );
  t.setDuration(actualDur);
  return (
    t.getTitle() === actual &&
    t.getDuration() === actualDur
  );
};
