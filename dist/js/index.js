angular.module("timApp", []).controller("timController", function($scope) {
  var selectedEvent;
  var modified = false;
  var calendar = new Calendar();
  $scope.openEvents = [];

  var updateForm = function( e ) {
    selectedEvent = e;
    $scope.eventTitle = selectedEvent.getTitle();

    $scope.startTime = selectedEvent.getStartTime();
    $scope.endTime = selectedEvent.getEndTime();
  };

  var clearForm = function() {
    $scope.eventTitle = "";
    var t = new Date();
    t.setSeconds(0);
    t.setMilliseconds(0);
    $scope.startTime = t;
    $scope.endTime = t;
  };

  $scope.addEvent = function() {
    var st = new Date();
    st.setSeconds(0);
    st.setMilliseconds(0);
    var e = new Event("Untitled", st.getTime(), st.getTime()+(1000*3600));
    calendar.addEvent(e);
    updateForm(e);
    $scope.openEvents = calendar.getEvents();
  };

  $scope.setSelectedEvent = function(e) {
    if(!modified) {
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

  $scope.change = function() {
    modified = true;
  };

  $scope.saveCurrentEvent = function() {
    if( typeof selectedEvent !== "undefined" ) {
      var eventStartTime = new Date($scope.startTime);
      var eventEndTime = new Date($scope.endTime);

      selectedEvent.setTitle( $scope.eventTitle );
      selectedEvent.setStartTime( eventStartTime );
      selectedEvent.setEndTime( eventEndTime );
    }
    else {
      selectedEvent = new Event($scope.eventTitle, $scope.startTime, $scope.endTime);
      calendar.addEvent(selectedEvent);
    }
    updateForm(selectedEvent);
    $scope.openEvents = calendar.getEvents();
    modified = false;
  };

  $scope.getSelectedEvent = function() {
    return selectedEvent;
  };

  $scope.closeEvent = function(id) {
    calendar.removeEvent(id);
    $scope.openEvents = calendar.getEvents();
    if( $scope.openEvents.length != 0 ) {
      selectedEvent = $scope.openEvents[0];
    }
    else {
      clearForm();
    }
  };
});
