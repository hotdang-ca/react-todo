var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',

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
        this.setState({
           todos: [...this.state.todos, {id: this.state.todos[this.state.todos.length -1].id + 1, text: text}] 
        });
    },
    
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },

    render: function() {
        var { todos } = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onTodoAdded={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;