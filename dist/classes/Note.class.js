// TODO: add member variables and complete functions
function Note(t) {
  if (typeof t === "undefined") {
    this.title = "Untitled";
  }
  else {
    this.title = t;
  }
  this.created = new Date();

  this.getTitle = function() {
    return this.title;
  };

  this.setTitle = function( t ) {
    this.title = t;
  };

  this.getTimeCreated = function() {
    return this.created;
  };
}

module.exports = Note;
