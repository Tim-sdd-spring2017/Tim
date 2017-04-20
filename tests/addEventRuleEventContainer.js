/******************************************************
 * Test adding an Event with a rule to EventContainer *
 ******************************************************/

var EventContainer = require( "../dist/classes/EventContainer.class" );
var Event = require( "../dist/classes/Event.class" );
module.exports = function() {
  var startTime = new Date();
  var range = 7*24*3600*1000;
  var ec = new EventContainer( startTime, new Date(startTime.getTime()+range) );
  var currentTime = new Date();
  var e = new Event( "Foobar", new Date(currentTime.getTime()), new Date(currentTime.getTime()+12*3600*1000) );
  ec.addEvent( e, {time: 1*24*3600*1000, endDate: new Date(startTime.getTime()+range+1000)} );

  return (
    ec.getNumEvents() === 7
  );
};
