/***************************************
 * Test adding Event to EventContainer *
 ***************************************/

var EventContainer = require( "../dist/classes/EventContainer.class" );
var Event = require( "../dist/classes/Event.class" );
module.exports = function() {
  var ec = new EventContainer();
  var d = new Date().getTime();
  var e1 = new Event("1", new Date(d+1000));
  var e2 = new Event("2", new Date(d+2000));
  var e3 = new Event("3", new Date(d+3000));
  var e4 = new Event("4", new Date(d+4000));
  var e5 = new Event("5", new Date(d+5000));

  ec.addEvent(e5);
  ec.addEvent(e4);
  ec.addEvent(e3);
  ec.addEvent(e2);
  ec.addEvent(e1);



  return (
    ec.getNumEvents() === 5 &&
    ec.getEvents()[0].getEventId() === e1.getEventId() &&
    ec.getEvents()[1].getEventId() === e2.getEventId() &&
    ec.getEvents()[2].getEventId() === e3.getEventId() &&
    ec.getEvents()[3].getEventId() === e4.getEventId() &&
    ec.getEvents()[4].getEventId() === e5.getEventId()
  );
};
