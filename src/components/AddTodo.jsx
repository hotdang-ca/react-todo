var React = require('react');

var AddTodo = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var newTodoItem = this.refs.addTodoField.value;
        if (typeof newTodoItem === 'string' && newTodoItem.length > 0) {
            this.props.onTodoAdded(newTodoItem);
            this.refs.addTodoField.value = '';
        } else {
            this.refs.addTodoField.focus();
        }
    },

    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="addTodoField" placeholder="new todo" />
                    <button className="button default hollow expanded">Add Todo</button> 
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;