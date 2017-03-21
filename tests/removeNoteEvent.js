/*******************************************************
 * Test for successfully removing a note from an event *
 *******************************************************/

// 0 for failure
// 1 for success
var Note = require( '../dist/classes/Note.class' );
var Event = require( '../dist/classes/Event.class' );
module.exports = function() {
  var n = new Note();
  var e = new Event();
  e.addNote( n );
  e.removeNote( 0 );
  return (
    e.getNumNotes() === 0
  );
};
