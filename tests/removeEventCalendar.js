/***********************************************************
 * Test for successfully removing an event from a calendar *
 ***********************************************************/

// 0 for failure
// 1 for success
var EventContainer = require( '../dist/classes/EventContainer.class' );
var Event = require( '../dist/classes/Event.class' );
var Calendar = require( '../dist/classes/Calendar.class' );
module.exports = function() {
  var c = new Calendar();
  var e = new Event();
  c.addEvent( e );
  c.removeEvent( e.getEventId() );
  return (
    c.getNumEvents() === 0
  );
};
