/*************************************************
 * Test removing an Event from an EventContainer *
 *************************************************/

var Event = require( "../dist/classes/Event.class" );
var EventContainer = require( "../dist/classes/EventContainer.class" );
module.exports = function() {
  var e = new Event();
  var ec = new EventContainer();
  ec.addEvent( e );
  ec.removeEvent( e.getEventId() );
  return (
    ec.getNumEvents() === 0
  );
};
