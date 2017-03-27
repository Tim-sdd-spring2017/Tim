// TODO: add member variables and complete functions
function Note(t) {
  if (typeof t === "undefined") {
    this.title = "Untitled";
  }
  else {
    this.title = t;
  }

  this.getTitle = function() {
    return this.title;
  };

  this.setTitle = function( t ) {
    this.title = t;
  };

  // Why does note have a time attribute?
  this.getTime = function() {
  };
}

module.exports = Note;
