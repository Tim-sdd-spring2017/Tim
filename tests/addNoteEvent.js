/***************************************************
 * Test for successfully adding a note to an event *
 ***************************************************/

var Note = require( '../dist/classes/Note.class' );
var Event = require( '../dist/classes/Event.class' );
module.exports = function() {
  var n = new Note();
  var e = new Event();
  e.addNote( n );
  return (
    e.getNumNotes() === 1 &&
    e.getNotes()[0] === n
  );
};
