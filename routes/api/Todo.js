const express = require('express');
const router = express.Router();

// Todo Model
const Todo = require('../../model/ToDo');

//@route GET api/Todo
//@desc Get ALL Todo
//@access Public
router.get('/', (req, res) => {
    ToDo.find()
        .sort({ dateDue: -1 })
        .then(Todo => res.json(Todo))
});

//@route POST api/Todo
//@desc Create a Post
//@access Public
router.post('/', (req, res) => {
    const newTodo = new Todo({
        name: req.body.name,
        dateDue: req.body.dateDue,
        timeNeed: req.body.timeNeed,
        difficulty: req.body.difficulty,
        percent: req.body.percent,
        core: req.body.core,
        interest: req.body.interest,
        predictable: req.body.predictable
    });

    newTodo.save().then();
});

module.exports = router;