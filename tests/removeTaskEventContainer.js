/***********************************************
 * Test removing a Test from an EventContainer *
 ***********************************************/

var Task = require( "../dist/classes/Task.class" );
var EventContainer = require( "../dist/classes/EventContainer.class" );
module.exports = function() {
  var t = new Task("t1", 1000);
  var ec = new EventContainer();
  ec.addTask( t );
  ec.removeTask( t.getTaskId() );
  return (
    ec.getNumTasks() === 0
  );
};
