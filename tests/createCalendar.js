/*********************************************
 * Test for successfully creating a calendar *
 *********************************************/

var EventContainer = require( '../dist/classes/EventContainer.class' );
var Calendar = require( '../dist/classes/Calendar.class' );
module.exports = function() {
  return typeof new Calendar() === "object";
};
