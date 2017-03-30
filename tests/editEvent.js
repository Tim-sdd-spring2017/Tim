/***************************************
 * Test for successfully edit an event *
 ***************************************/

// 0 for failure
// 1 for success
var Event = require( '../dist/classes/Event.class' );
module.exports = function() {
  var title = "Test", actual = "Actual";
  var startTime = new Date(), actualST = new Date();
  var endTime = new Date(), actualET = new Date();
  var e = new Event( title, startTime, endTime );
  e.setTitle( actual );
  e.setStartTime( actualST );
  e.setEndTime( actualET );
  return (
    e.getTitle() === actual &&
    e.getStartTime().toDateString() === actualST.toDateString() &&
    e.getEndTime().toDateString() === actualET.toDateString()
  );
};
