/***********************************************
 * Test removing a Test from an EventContainer *
 ***********************************************/

var Task = require( "../dist/classes/Task.class" );
var EventContainer = require( "../dist/classes/EventContainer.class" );
module.exports = function() {
  var t = new Task("t", 1000, new Date());
  var t1 = new Task("t1", 1000, new Date());
  var ec = new EventContainer();
  ec.addTask( t );
  ec.addTask( t1 );
  ec.removeTask( t.getTaskId() );
  return (
    ec.getNumTasks() === 1 &&
    ec.getTasks()[0].getTaskId() === t1.getTaskId()
  );
};
