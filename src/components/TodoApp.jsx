var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Change up shaw'
                },
                {
                    id: 4,
                    text: 'Pay the bills'
                },
            ]
        };
    },

    handleAddTodo: function(text) {
        alert("New todo: " + text);
    },

    render: function() {
        var { todos } = this.state;

        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onTodoAdded={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;