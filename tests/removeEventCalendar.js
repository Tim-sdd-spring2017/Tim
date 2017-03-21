/***********************************************************
 * Test for successfully removing an event from a calendar *
 ***********************************************************/

// 0 for failure
// 1 for success
var Event = require( '../dist/classes/Event.class' );
var Calendar = require( '../dist/classes/Calendar.class' );
module.exports = function() {
  var c = new Calendar();
  var e = new Event();
  c.addEvent( e );
  c.removeEvent( 0 );
  return (
    c.getNumEvents() === 0
  );
};
