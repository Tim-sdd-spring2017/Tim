/*******************************************
 * Test for successfully creating an event *
 *******************************************/

// 0 for failure
// 1 for success
var Event = require( '../dist/classes/Event.class' );
module.exports = function() {
  return typeof new Event() === "object";
};
