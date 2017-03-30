/*****************************************
 * Test for successfully creating a note *
 *****************************************/

var Note = require( '../dist/classes/Note.class' );
module.exports = function() {
  return typeof new Note() === "object";
};
