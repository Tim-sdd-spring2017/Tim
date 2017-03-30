/*********************************************************
 * Test for successfully removing a task from a calendar *
 *********************************************************/

// 0 for failure
// 1 for success
var Task = require( '../dist/classes/Task.class' );
var Calendar = require( '../dist/classes/Calendar.class' );
module.exports = function() {
  var t = new Task();
  var c = new Calendar();
  c.addTask( t );
  c.removeTask( 0 );
  return (
    c.getNumTasks() === 0
  );
};
