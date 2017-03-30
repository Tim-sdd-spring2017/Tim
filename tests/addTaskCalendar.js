/************************************
 * Test adding Task to the Calendar *
 ************************************/

var Task = require( "../dist/classes/Task.class" );
var Calendar = require( "../dist/classes/Calendar.class" );
module.exports = function() {
  var t = new Task();
  var c = new Calendar();
  c.addTask( t );
  return (
    c.getNumTasks() === 1
  );
};
