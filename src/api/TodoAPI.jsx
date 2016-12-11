var $ = require('jQuery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem(
                'todos', JSON.stringify(todos)
            );
            return todos;
        }
    },

    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (error) {
        }

        return $.isArray(todos) ? todos : [];
    },

    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = filteredTodos.filter( (todo) => {
            return !todo.completed || showCompleted;
        });

        // filter by Search Text
        filteredTodos = filteredTodos.filter( (todo) => {
            return todo.text.search(searchText) > -1;
        });

        // sort todos by completion status
        filteredTodos.sort((a,b) => {
            // -1 a before b
            //  0 no change
            //  1 b before b
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};