/****************************************
 * Test for successfully editing a note *
 ****************************************/

var Note = require( '../dist/classes/Note.class' );
module.exports = function() {
  var title = "Test", actual = "Actual";
  var time = new Date();
  var n = new Note( title, time );
  n.setTitle( actual );
  return n.getTitle() === actual;
};
