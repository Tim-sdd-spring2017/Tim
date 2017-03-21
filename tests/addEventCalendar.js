/*******************************************************
 * Test for successfully adding an event to a calendar *
 *******************************************************/

// 0 for failure
// 1 for success
var Event = require( '../dist/classes/Event.class' );
var Calendar = require( '../dist/classes/Calendar.class' );
module.exports = function() {
  var e = new Event();
  var c = new Calendar();
  c.addEvent( e );
  return (
    c.getNumEvents() === 1 &&
    c.getEvents()[0] === e
  );
};
