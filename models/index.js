const mongoose = require('mongoose');

mongoose.set('debud', true);

mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');