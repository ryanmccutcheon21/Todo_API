$(document).ready(() => {
    $.getJSON("/api/todos")
        .then(addTodos())
        .catch(err => {
            console.log(err);
        })
    $('#todoInput').keypress(event => {
        if (event.which == 13) {
            createTodo();
        }
    })
    $('.list').on('click', 'li', () => {
        updateTodo($(this));
    })
    $('.list').on('click', 'span', event => {
        event.stopPropagation();
        removeTodo($(this).parent());
    })
})

const addTodos = todos => {
    // add todos to page here
    todos.forEach(todo => {
        addTodo(todo);
    })
}

const addTodo = todo => {
    const newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if (todo.completed) {
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

const createTodo = () => {
    // send request to create new todo
    const userInput = $('#todoInput').val();
    $.post('/api/todos', { name: userInput })
        .then(newTodo => {
            $('#todoInput').val('')
            addTodo(newTodo)
        })
        .catch(err => {
            console.log(err);
        })
}

const removeTodo = () => {
    const
        clickedId = todo.data('id'),
        deleteUrl = '/api/todos/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
        .then(data => {
            todo.remove();
        })
        .catch(err => {
            console.log(err);
        })
}

const updateTodo = todo => {
    const
        updateUrl = '/api/todos/' + todo.data('id'),
        isDone = !todo.data('completed'),
        updateData = { completed: isDone };
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
        .then(updatedTodo => {
            todo.toggleClass('done');
            todo.data('completed', isDone);
        })
        .catch(err => {
            console.log(err);
        })
}