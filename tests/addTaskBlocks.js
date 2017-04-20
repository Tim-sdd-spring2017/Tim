var EventContainer = require( "../dist/classes/EventContainer.class" );
var Event = require( "../dist/classes/Event.class" );
var Task = require( "../dist/classes/Task.class" );
module.exports = function() {
  var ec = new EventContainer();
  var d = new Date().getTime();
  var e1 = new Event("e1", new Date(d));
  var e2 = new Event("e2", new Date(d+1000*3600*2));
  var e3 = new Event("e3", new Date(d+1000*3600*5));

  ec.addEvent(e1);
  ec.addEvent(e2);
  ec.addEvent(e3);

  var t1 = new Task("t1", 1000*3600);
  var t2 = new Task("t2", 1000*3600);
  var t3 = new Task("t3", 1000*3600);

  ec.addTask(t1);
  ec.addTask(t2);
  ec.addTask(t3);

  console.log(ec.getNumEvents());
  // for (var i=0; i<ec.getNumEvents(); i++) {
  //   console.log(ec.getEvents()[i].getTitle());
  // }

  return (
    false
  );
};