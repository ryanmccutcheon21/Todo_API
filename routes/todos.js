const
    express = require('express'),
    router = express.Router(),
    db = require('../models'),
    controllers = require('../controllers/todos');

router.route('/')
    .get(controllers.getTodos)
    .post(controllers.createTodo)


// to get the Id, and put it in the id variable in our route, the id can 
// be found in req.params.todoId. The id will be found in whatever our route
// variable is called
router.route('/:todoId')
    .get(controllers.getTodo)
    .put(controllers.updateTodo)
    .delete(controllers.deleteTodo)

module.exports = router;