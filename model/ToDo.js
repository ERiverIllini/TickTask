const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema for a new task
const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateDue: {
        type: Date,
        default: Date.now
    },
    timeNeed: {
        type: Number,
        default: -1
    },
    difficulty: {
        type: Number,
        default: -1
    },
    percent: {
        type: Number,
        default: -1
    },
    core: {
        type: Number,
        default: -1
    },
    interest: {
        type: Number,
        default: -1
    },
    predictable: {
        type: Number,
        default: -1
    }
});

var Task = mongoose.model('Task', TaskSchema);

// TaskSchema.methods.getPriority = function getPriority(cb) {
//      var timePoint, datePoint, difPoint, perPoint, corePoint, intPoint, predPoint;
//      var count = 0;
//      datePoint = Math.pow(2, this.dateDue - Date.now)
//      if (this.timeNeed != -1) ({
//          timePoint = this.timeNeed,
//          count = count + 0.8
//      })
//      if (this.difficulty != -1) ({
//          difPoint = this.difficulty,
//          count = count + 0.5
//      })
//      if (this.percent != -1) ({
//          perPoint = this.percent,
//          count = count + 0.8
//      })
//      if (this.core != -1) ({
//          corePoint = this.core,
//          count = count + 0.3
//      })
//      if (this.interest != -1) ({
//          intPoint = this.interest,
//          count = count + 0.9
//      })
//      if (this.predictable != -1) ({
//          perPoint = this.predictable,
//          count = count + 0.3
//      })
//      var dateConst = 1.0/(count + 1);
//      var priority = dateConst*datePoint;
//      if (this.timeNeed != -1) ({
//          priority = priority + timePoint*dateConst*0.8
//      })
//      if (this.difficulty != -1) ({
//          priority = priority + difPoint*dateConst*0.5
//      })
//      if (this.percent != -1) ({
//          priority = priority + perPoint*dateConst*0.8
//      })
//      if (this.core != -1) ({
//          priority = priority + corePoint*dateConst*0.3
//      })
//      if (this.interest != -1) ({
//          priority = priority + intPoint*dateConst*0.9
//      })
//      if (this.predictable != -1) ({
//          priority = priority + predPoint*dateConst*0.16
//      })
//      this.priority = priority;
//      return priority;
//  }

//Sample Task
var dog = new Task({
    name: "dog",
    dateDue: new Date(2018, 11, 10),
    timeNeed: 2,
    difficulty: 1,
    percent: 5,
    core: 3,
    interest: 4,
    predictable: 9
});

var cat = new Task({
    name: "cat",
    dateDue: new Date(2018, 11, 10),
    timeNeed: 5,
    difficulty: 5,
    percent: 5,
    core: 9,
    interest: 5,
    predictable: 9
});

var fish = new Task({
    name: "fish",
    dateDue: new Date(2018, 11, 10),
    timeNeed: 1,
    difficulty: 1,
    percent: 1,
    core: 1,
    interest: 1,
    predictable: 9
});

var items = [dog, cat];

function getPriority (item) {
    //Points out of 10 for each variable
    var timePoint, datePoint, difPoint, perPoint, corePoint, intPoint, predPoint;
    var count = 0;
    var d = new Date();
    //Choosing date constant based on how many days away it is.
    if (item.dateDue.getDate() - d.getDate() > 10 || item.dateDue.getDate() - d.getDate() < 0) {
        datePoint = 1;
    } else {
        datePoint = 10 - item.dateDue.getDate() + d.getDate();
    }
    if (item.timeNeed != -1) {
        timePoint = item.timeNeed,
        count = count + 0.8
     }
     if (item.difficulty != -1) {
        difPoint = item.difficulty,
        count = count + 0.5
     }
     if (item.percent != -1) {
         perPoint = item.percent,
         count = count + 0.8
     }
     if (item.core != -1) {
         corePoint = item.core,
         count = count + 0.3
     }
     if (item.interest != -1) {
         intPoint = item.interest,
         count = count + 0.9
     }
     if (item.predictable != -1) {
         predPoint = 10 - item.predictable,
         count = count + 0.3
     }
     //Does the math
     var dateConst = 1.0/(count + 1);
     var priority = dateConst*datePoint;
     if (item.timeNeed != -1) {
         priority = priority + timePoint*dateConst*0.8
     }
     if (item.difficulty != -1) {
         priority = priority + difPoint*dateConst*0.5
     }
     if (item.percent != -1) {
         priority = priority + perPoint*dateConst*0.8
     }
     if (item.core != -1) {
         priority = priority + corePoint*dateConst*0.3
     }
     if (item.interest != -1) {
         priority = priority + intPoint*dateConst*0.9
     }
     if (item.predictable != -1) {
         priority = priority + predPoint*dateConst*0.16
     }
     item.priority = priority;
     return priority;
}

//Sets up priority property in schema
getPriority(dog);
getPriority(cat);

//Inserts from lowest priority to highest
function insert (taskArray, newTask) {
    var priority = getPriority(newTask);
    for (var i = 0; i < taskArray.length; i++) {
        var instPriority = getPriority(taskArray[i]);
        if (instPriority > priority) {
            taskArray.splice(i,0,newTask);
            return;
        }
    }
    taskArray.push(newTask);
}

//Tests
insert(items, fish);
//console.log(items[0].priority);
//console.log(items[1].priority);
//console.log(items[2].priority);
