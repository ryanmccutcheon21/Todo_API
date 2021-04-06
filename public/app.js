const { createTodo } = require("../controllers/todos")

$(document).ready(() => {
    $.getJSON("/api/todos")
        .then(addTodos)
        .catch(err => {
            console.log(err)
        })
    $('#todoInput').keypress(event => {
        if (event.which == 13) {
            createTodo();
        }
    })
})

const addTodos = todos => {
    // add todos to page here
    todos.forEach(todo => {
        addTodo(todo);
    })
}

const addTodo = todo => {
    const newTodo = $('<li class="task">' + todo.name + '</li>')
    if (todo.completed) {
        newTodo.addClass('done')
    }
    $('.list').append(newTodo)
}

const createTodo = () => {
    // send request to create new todo
    const userInput = $('#todoInput').val()
    $.post('/api/todos', { name: userInput })
        .then(newTodo => {
            $('#todoInput').val('')
            addTodo(newTodo)
        })
        .catch(err => {
            console.log(err)
        })
}