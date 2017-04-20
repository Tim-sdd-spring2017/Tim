/************************
 * Test creating a Task *
 ************************/

var Task = require( "../dist/classes/Task.class" );
module.exports = function() {
  return typeof new Task("t", 1000) === "object";
};
