/***************************************
 * Controller for the main application *
 ***************************************/
angular.module("timApp", []).controller("timController", function($scope) {
  // "Private" Variables
  var selectedEvent;
  var modified = false;
  var calendar = new Calendar();

  // Add tasks because no UI functionality
  calendar.addTask(new Task("Task 1", 3600*1000, new Date(new Date().getTime()+10*3600*1000)));
  calendar.addTask(new Task("Task 2", 3600*1000, new Date(new Date().getTime()+10*3600*1000)));
  calendar.addTask(new Task("Task 3", 3600*1000, new Date(new Date().getTime()+10*3600*1000)));

  // View variables
  $scope.events = [];
  $scope.tasks = [];
  $scope.openEvents = [];

  $scope.notes = [];      // Notes for open event

  /**
   * Updates the form with the event information
   * @param  Event    e   Event to populate fields with
   */
  var updateForm = function(e) {
    selectedEvent = e;
    $scope.eventTitle = selectedEvent.getTitle();
    $scope.eventStartTime = selectedEvent.getStartTime();
    $scope.eventEndTime = selectedEvent.getEndTime();

    $scope.notes = selectedEvent.getNotes();
  };

  /**
   * Resets the form data to default values
   */
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

  /**
   * Adds an empty event to the calendar
   */
  $scope.addEvent = function() {
    var st = new Date();
    st.setSeconds(0);
    st.setMilliseconds(0);
    var e = new Event("Untitled", st.getTime(), st.getTime()+(1000*3600));
    calendar.addEvent(e);
    $scope.openEvents.push(e);
    $scope.events = calendar.getEvents();
    $scope.tasks = calendar.getTasks();
    updateForm(e);
  };

  /**
   * Sets the selected event
   * @param  Event    e   Desired event to be selected
   * @return Boolean      True if the event changed, false otherwise
   */
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

  /**
   * Opens a particular event
   * @param  Event  e   Event to open
   */
  $scope.openEvent = function(e) {
    if( $scope.openEvents.indexOf(e) === -1) {
      $scope.openEvents.push(e);
    }
    $scope.setSelectedEvent(e);
  };

  /**
   * Tracks if changes were made to the form for saving
   */
  $scope.change = function() {
    modified = true;
  };

  /**
   * Adds a note to the current event
   * @return Boolean    False if the no current event exists, true otherwise
   */
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

  /**
   * Removes a note from the current event
   * @param  int     index  Index of the note to be removed
   * @return Boolean        True if the note was removed, false otherwise
   */
  $scope.removeNote = function(index) {
    if( confirm( "Are you sure you want to remove this note?" ) ) {
      selectedEvent.removeNote(index);
      $scope.notes = selectedEvent.getNotes();
      return true;
    }
    return false;
  };

  /**
   * Saves the current event
   */
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
    $scope.tasks = calendar.getTasks();
  };

  /**
   * Gets the current event
   * @return Event The current event
   */
  $scope.getSelectedEvent = function() {
    return selectedEvent;
  };

  /**
   * Closes an event in openEvents
   * @param  int     index  Index in openEvents to be removed
   */
  $scope.closeEvent = function(index) {
    $scope.openEvents.splice(index, 1);
    if( $scope.openEvents.length != 0 ) {
      selectedEvent = $scope.openEvents[0];
    }
    else {
      clearForm();
    }
  };

  /**
   * Deletes an event from the calendar
   * @param  int     id  Id of the event to be removed
   * @return Boolean     True if the event was removed, false otherwise
   */
  $scope.deleteEvent = function(id) {
    if( confirm( "Are you sure you want to delete this event?" ) ) {
      calendar.removeEvent(id);
      $scope.events = calendar.getEvents();
      return true;
    }
    return false;
  };
});
