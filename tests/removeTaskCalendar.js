/*********************************************************
 * Test for successfully removing a task from a calendar *
 *********************************************************/

var Task = require( '../dist/classes/Task.class' );
var Calendar = require( '../dist/classes/Calendar.class' );
module.exports = function() {
  var t = new Task();
  var c = new Calendar();
  c.addTask( t );
  c.removeTask( t.getTaskId() );
  return (
    c.getNumTasks() === 0
  );
};
