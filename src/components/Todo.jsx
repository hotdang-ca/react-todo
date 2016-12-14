var React = require('react');
var moment = require('moment');

var { connect } = require('react-redux');
var actions = require('actions');

var Todo = React.createClass({

    render: function () {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;

        var todoClassName = completed ? 'todo todo-completed' : 'todo';

        var renderDate = () => {
            var message = completed ? 'Completed ' : 'Created ';
            var timestamp = completed ? completedAt : createdAt;

            return message + moment.unix(timestamp).format("MMMM Do YYYY @ h:mm a") + ' (' + moment.unix(timestamp).fromNow() + ')';

        };

        return (
            <div className={todoClassName} onMouseUp={() => {
                // this.props.onToggle(id);
                dispatch(actions.toggleTodo(id));
                
            }}>
                <div><input type="checkbox" checked={completed}/></div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>  
            </div>
        );
    }
});

module.exports = connect()(Todo);