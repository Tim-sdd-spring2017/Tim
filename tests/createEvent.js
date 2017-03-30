/*******************************************
 * Test for successfully creating an event *
 *******************************************/

var Event = require( '../dist/classes/Event.class' );
module.exports = function() {
  return typeof new Event() === "object";
};
