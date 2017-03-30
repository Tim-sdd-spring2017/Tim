/***********************************
 * Test creating an EventContainer *
 ***********************************/

var EventContainer = require( "../dist/classes/EventContainer.class" );
module.exports = function() {
  return (typeof new EventContainer() === "object");
};
