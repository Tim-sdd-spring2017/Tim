var Note = require( '../dist/classes/Note.class' );
var Task = require( '../dist/classes/Task.class' );
module.exports = function() {
  var n = new Note();
  var t = new Task();
  t.addNote( n );
  return (
    t.getNumNotes() === 1 &&
    t.getNotes()[0] === n
  );
};
