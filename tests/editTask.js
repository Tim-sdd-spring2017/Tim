/***********************
 * Test editing a Task *
 ***********************/

var Task = require( "../dist/classes/Task.class" );
module.exports = function() {
  var title = "Test", actual = "Actual";
  var startTime = new Date(), actualST = new Date();
  var endTime = new Date(), actualET = new Date();
  var t = new Task( title, startTime, endTime );
  t.setTitle( actual );
  t.setStartTime( actualST );
  t.setEndTime( actualET );
  return (
    t.getTitle() === actual &&
    t.getStartTime().toDateString() === actualST.toDateString() &&
    t.getEndTime().toDateString() === actualET.toDateString()
  );
};
