// TODO: add member variables and complete functions
function Note(t, c) {
  this.title = (typeof t === "undefined") ?
    "Untitled" : t;
  this.content = (typeof c === "undefined") ?
    "" : c;
  this.created = new Date();

  this.getTitle = function() {
    return this.title;
  };

  this.setTitle = function( t ) {
    this.title = t;
  };

  this.getContent = function() {
    return this.content;
  }

  this.setContent = function( c ) {
    this.content = c;
  }

  this.getTimeCreated = function() {
    return this.created;
  };
}

module.exports = Note;
