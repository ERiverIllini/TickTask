const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema for a new task
const TaskSchema = new Schema({
    availability: {
        type: String,
        required: true
    },
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
    },
    priority: {
        type: Number,
        default: -1
    }
});

var Task = mongoose.model('Task', TaskSchema);

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
}