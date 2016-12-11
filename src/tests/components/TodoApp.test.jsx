var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp Component', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state onHandleAddTodo', () => {
    var todoText = "Test Text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({
      todos: []
    });

    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test Features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos: [todoData]
    });

    // check that first item is false
    expect(todoApp.state.todos[0].completed).toBe(false);

    // handleToggle with the id, and expect that it's true
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
    
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  })
});
