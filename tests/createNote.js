/*****************************************
 * Test for successfully creating a note *
 *****************************************/

// 0 for failure
// 1 for success
var Note = require( '../dist/classes/Note.class' );
module.exports = function() {
  return typeof new Note() === "object";
};
