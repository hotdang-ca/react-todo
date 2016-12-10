var React = require('react');
var TodoList = require('TodoList');

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

    render: function() {
        var { todos } = this.state;

        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = TodoApp;