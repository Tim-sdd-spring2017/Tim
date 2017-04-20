angular.module("timApp", []).controller("timController", function($scope) {
  var selectedEvent;
  var modified = false;
  var calendar = new Calendar();
  $scope.events = [];
  $scope.tasks = [];
  $scope.openEvents = [];

  $scope.notes = [];

  var updateForm = function(e) {
    selectedEvent = e;
    $scope.eventTitle = selectedEvent.getTitle();
    $scope.eventStartTime = selectedEvent.getStartTime();
    $scope.eventEndTime = selectedEvent.getEndTime();

    $scope.notes = selectedEvent.getNotes();
  };

  var clearForm = function() {
    $scope.eventTitle = "Untitled";
    var t = new Date();
    t.setSeconds(0);
    t.setMilliseconds(0);
    $scope.eventStartTime = t;
    $scope.eventEndTime = t;

    $scope.notes = [];
    $scope.noteTitle = "";
    $scope.noteContent = "";
  };

  $scope.addEvent = function() {
    var st = new Date();
    st.setSeconds(0);
    st.setMilliseconds(0);
    var e = new Event("Untitled", st.getTime(), st.getTime()+(1000*3600));
    calendar.addEvent(e);
    $scope.openEvents.push(e);
    $scope.events = calendar.getEvents();
    updateForm(e);
  };

  $scope.setSelectedEvent = function(e) {
    if(!modified || typeof selectedEvent === "undefined") {
      updateForm(e);
      return true;
    }
    else {
      if( confirm( "Are you sure?" ) ) {
        updateForm(e);
        modified = false;
        return true;
      }
      return false;
    }
  };

  $scope.openEvent = function(e) {
    if( $scope.openEvents.indexOf(e) === -1) {
      $scope.openEvents.push(e);
    }
    $scope.setSelectedEvent(e);
  };

  $scope.change = function() {
    modified = true;
  };

  $scope.addNote = function() {
    if( typeof selectedEvent === "undefined" ) return false;
    var noteTitle = $scope.noteTitle;
    var noteContent = $scope.noteContent;
    selectedEvent.addNote(new Note($scope.noteTitle, $scope.noteContent));

    $scope.notes = selectedEvent.getNotes();
    $scope.noteTitle = "";
    $scope.noteContent = "";
    return true;
  };

  $scope.removeNote = function(index) {
    if( confirm( "Are you sure you want to remove this note?" ) ) {
      selectedEvent.removeNote(index);
      $scope.notes = selectedEvent.getNotes();
      return true;
    }
    return false;
  };

  $scope.saveCurrentEvent = function() {
    if( typeof selectedEvent !== "undefined" ) {
      var eventStartTime = new Date($scope.eventStartTime);
      var eventEndTime = new Date($scope.eventEndTime);

      selectedEvent.setTitle( $scope.eventTitle );
      selectedEvent.setStartTime( eventStartTime );
      selectedEvent.setEndTime( eventEndTime );

    }
    else {
      selectedEvent = new Event($scope.eventTitle, $scope.eventStartTime, $scope.eventEndTime);
      calendar.addEvent(selectedEvent);
    }

    modified = false;
    $scope.openEvent( selectedEvent );
    $scope.events = calendar.getEvents();
  };

  $scope.getSelectedEvent = function() {
    return selectedEvent;
  };

  $scope.closeEvent = function(index) {
    $scope.openEvents.splice(index, 1);
    if( $scope.openEvents.length != 0 ) {
      selectedEvent = $scope.openEvents[0];
    }
    else {
      clearForm();
    }
  };
});
