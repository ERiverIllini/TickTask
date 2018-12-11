//const schedule = require('schedulejs');
const later = require('later');
const getPriority = require('../model/getPriority');
const ToDo = require('../model/ToDo');

module.exports = function (items, startDate, projectAvailability) {
  function getSchedule (items) {
    var idCount = 1;
    var tempCounts = [];
    var tasks = [];
    for (i = 0; i < items.length; i++) {
      console.log(tempCounts);
      tasks.push({
        id: idCount,
        duration: parseInt(items[i].timeNeed, 10) * 30,
        dependsOn: tempCounts.slice(0, idCount - 1),
        available: later.parse.text(items[i].availability),
        priority: getPriority(items[i])
      });
      tempCounts.push(idCount);
      idCount++;
    }
    return tasks;
  }

  var schedule = require('schedulejs'),
    tasks = getSchedule(items),
    resources = [
      {id: 'A'},
      {id: 'B', available: later.parse.text('after 10:00am and before 6:00pm')},
      {id: 'C', isNotReservable: true}
    ];
  
  return schedule.create(tasks, resources, projectAvailability, startDate);
}

  // //Sample Task
  // var dog = new Todo({
  //   availability: "Every weekday",
  //   name: "dog",
  //   dateDue: new Date(2018, 11, 10),
  //   timeNeed: 2,
  //   difficulty: 1,
  //   percent: 5,
  //   core: 3,
  //   interest: 4,
  //   predictable: 9
  // });
  
  // var cat = new ToDo({
  //   availability: "Every weekday",
  //   name: "cat",
  //   dateDue: new Date(2018, 11, 10),
  //   timeNeed: 5,
  //   difficulty: 5,
  //   percent: 5,
  //   core: 9,
  //   interest: 5,
  //   predictable: 9
  // });
  
  // var fish = new Todo({
  //   availability: "Every weekday",
  //   name: "fish",
  //   dateDue: new Date(2018, 11, 10),
  //   timeNeed: 1,
  //   difficulty: 1,
  //   percent: 1,
  //   core: 1,
  //   interest: 1,
  //   predictable: 9
  // });
  
  // var items = [cat, dog, fish];
  
  // //Sets up priority property in schema
  // getPriority(dog);
  // getPriority(cat);
  // getPriority(fish);

  
  
  // console.log(getSchedule(items));
  // console.log(schedule.create(tasks, resources, later.parse.text('every weekday'), new Date()));