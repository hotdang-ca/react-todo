var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');
var TodoList = require('TodoList');

describe('TodoList Component', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
      var todos = [
          {
            id: 1,
            text: 'Test'
        },
        { 
            id: 2,
            text: 'Test'
        }
      ];

      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
      expect(todosComponents.length).toBe(todos.length);
  });
});
