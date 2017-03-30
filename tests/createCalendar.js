/*********************************************
 * Test for successfully creating a calendar *
 *********************************************/

// 0 for failure
// 1 for success
var EventContainer = require( '../dist/classes/EventContainer.class' );
var Calendar = require( '../dist/classes/Calendar.class' );
module.exports = function() {
  return typeof new Calendar() === "object";
};
