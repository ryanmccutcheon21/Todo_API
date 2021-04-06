$(document).ready(() => {
    $.getJSON("/api/todos")
        .then(addTodos)
        .catch(err => {
            console.log(err)
        })
})

const addTodos = todos => {
    // add todos to page here
    todos.forEach(todo => {
        const newTodo = $('<li class="task">' + todo.name + '</li>')
        $('.list').append(newTodo)
    })
}