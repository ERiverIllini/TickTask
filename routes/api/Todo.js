const express = require('express');
const router = express.Router();

// Todo Model
const Todo = require('../../model/ToDo');

//@route GET api/Todo
//@desc Get ALL Todo
//@access Public
router.get('/', (req, res) => {
    ToDo.find()
        .sort({ priority: -1 })
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
        predictable: req.body.predictable,
        priority: getPriority(newTodo)
    });
    newTodo.save().then(item => res.json(item));
});

//@route DELETE api/Todo/:id
//@desc Delete a Post
//@access Public
router.delete('/:id', (req, res) => {
    ToDo.findById(req.params.id)
      .then(Todo => Todo=remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;