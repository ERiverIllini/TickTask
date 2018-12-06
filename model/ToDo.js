const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema for a new task
const TaskSchema = new Schema({
    availability: {
        type: String
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

//Create schema for a new user
const UserSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sleepTimeStart: {
        type: Date,
        default: new Date("2018-12-10T8:00:00Z")
    },
    sleepTimeEnd: {
        type: Date,
        default: new Date("2018-12-10T20:00:00Z")
    }
})

var Task = mongoose.model('Task', TaskSchema);

module.exports = Todo = mongoose.model('Todo', TaskSchema);
//module.exports = User = mongoose.model('User', UserSchema);