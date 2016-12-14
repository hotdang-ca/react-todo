var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import ConnectedTodoList, { TodoList } from 'TodoList';
var Todo = require('Todo');

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

    it('should render empty message if no todos', () => {
      var todos = [];

      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var $el = $(ReactDOM.findDOMNode(todoList));
      
      expect($el.find('.container__message').length).toBe(1);
      
  });
});
