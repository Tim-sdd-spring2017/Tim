/************************************
 * Test adding Task to the Calendar *
 ************************************/

var Event = require( "../dist/classes/Event.class" );
var Task = require( "../dist/classes/Task.class" );
var Calendar = require( "../dist/classes/Calendar.class" );
module.exports = function() {
  // var t = new Task("t", 1000, new Date());
  var c = new Calendar();

  // c.addTask( t );
  // return (
  //   c.getNumTasks() === 1
  // );
  // var d = new Date().getTime();
  // var e1 = new Event("e1", new Date(d), new Date(d+1000*3600));
  // var e2 = new Event("e2", new Date(d+1000*3600*2), new Date(d+1000*3600*3));
  // var e3 = new Event("e3", new Date(d+1000*3600*5), new Date(d+1000*3600*6));

  // c.addEvent(e1);
  // c.addEvent(e2);
  // c.addEvent(e3);

  var t1 = new Task("t1", 1000*3600);
  var t2 = new Task("t2", 2000*3600);
  var t3 = new Task("t3", 1000*3600);

  c.addTask(t1);
  c.addTask(t2);
  c.addTask(t3);

  // console.log(c.getNumEvents());
  // for (var i=0; i<c.getNumEvents(); i++) {
  //   console.log(c.getEvents()[i].getTitle() + " start " + c.getEvents()[i].getStartTime() + " end " + c.getEvents()[i].getEndTime());
  // }

  return (
    c.getNumTasks() === 3 &&
    c.getNumEvents() === 3 &&
    c.getEvents()[0].getTitle() === "TaskBlock" &&
    c.getEvents()[1].getTitle() === "TaskBlock" &&
    c.getEvents()[2].getTitle() === "TaskBlock"
  );
};
