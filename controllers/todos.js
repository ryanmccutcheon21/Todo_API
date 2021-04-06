const
    db = require('../models')
Todo = require('../models/todo');


exports.getTodos = (req, res) => {
    db.Todo.find()
        .then(todos => {
            res.status(201).json(todos);
        })
        .catch(err => {
            res.send(err);
        })
};

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
        .then(newTodo => {
            res.json(newTodo);
        })
        .catch(err => {
            res.send(err);
        })
};

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then(foundTodo => {
            res.json(foundTodo);
        })
        .catch(err => {
            res.send(err);
        })
};

exports.updateTodo = (req, res) => {
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
        .then(todo => {
            res.json(todo);
        })
        .catch(err => {
            res.send(err);
        })
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    db.Todo.findByIdAndDelete(id)
        .then(todo => {
            res.json(todo);
        })
        .catch(err => {
            res.send(err);
        })
};

module.exports = exports;