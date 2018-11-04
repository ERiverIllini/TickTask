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
        default: Date.now + 86400000
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

TaskSchema.method.getPriority = function setPriority(TaskSchema) {
    var Task = mongoose.model('Task', this);
    var timePoint, datePoint, difPoint, perPoint, corePoint, intPoint, predPoint;
    var count = 0;
    datePoint = Math.pow(2, this.get('dateDue') - Date.now)
    if (Task.get('timeNeed') != -1) ({
        timePoint = Task.get('timeNeed'),
        count = count + 0.8
    })
    if (Task.get('difficulty') != -1) ({
        timePoint = Task.get('difficulty'),
        count = count + 0.5
    })
    if (Task.get('percent') != -1) ({
        timePoint = Task.get('percent'),
        count = count + 0.8
    })
    if (Task.get('core') != -1) ({
        timePoint = Task.get('core'),
        count = count + 0.3
    })
    if (Task.get('interest') != -1) ({
        timePoint = Task.get('interest'),
        count = count + 0.9
    })
    if (Task.get('predictable') != -1) ({
        timePoint = Task.get('predictable'),
        count = count + 0.3
    })
    var dateConst = 1.0/(count + 1);
    var priority = dateConst*datePoint;
    if (Task.get('timeNeed') != -1) ({
        priority = priority + timePoint*dateConst*0.8
    })
    if (Task.get('difficulty') != -1) ({
        priority = priority + difPoint*dateConst*0.5
    })
    if (Task.get('percent') != -1) ({
        priority = priority + perPoint*dateConst*0.8
    })
    if (Task.get('core') != -1) ({
        priority = priority + corePoint*dateConst*0.3
    })
    if (Task.get('interest') != -1) ({
        priority = priority + intPoint*dateConst*0.9
    })
    if (Task.get('predictable') != -1) ({
        priority = priority + predPoint*dateConst*0.16
    })
}

//module.exports = ToDo = mongoose.model('todo', TaskSchema)