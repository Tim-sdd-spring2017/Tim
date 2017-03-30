/***************************************
 * Test adding Event to EventContainer *
 ***************************************/

var EventContainer = require( "../dist/classes/EventContainer.class" );
var Event = require( "../dist/classes/Event.class" );
module.exports = function() {
  var ec = new EventContainer();
  var e = new Event();
  ec.addEvent( e );
  return (
    ec.getNumEvents() === 1
  );
};
