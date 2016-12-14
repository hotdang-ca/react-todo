var React = require('react');

var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var newTodoItem = this.refs.addTodoField.value;
        if (typeof newTodoItem === 'string' && newTodoItem.length > 0) {
            this.refs.addTodoField.value = '';
            dispatch(actions.addTodo(newTodoItem));

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

export default connect()(AddTodo);