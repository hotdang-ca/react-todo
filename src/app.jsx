var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe( () => {
  console.log("New State", store.getState());
});

store.dispatch(actions.addTodo('Set up Redux'));
store.dispatch(actions.setSearchText('redux'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

// app styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
