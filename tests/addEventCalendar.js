/*******************************************************
 * Test for successfully adding an event to a calendar *
 *******************************************************/

var Event = require( '../dist/classes/Event.class' );
var Calendar = require( '../dist/classes/Calendar.class' );
module.exports = function() {
  var c = new Calendar();
  var e = new Event();
  c.addEvent( e );
  return (
    c.getNumEvents() === 1 &&
    c.getEvents()[0] === e
  );
};
