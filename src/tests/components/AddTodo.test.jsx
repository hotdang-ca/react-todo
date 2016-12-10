var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo Component', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo with valid data', () => {
    var todoText = 'Check Mail';

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onTodoAdded={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.addTodoField.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should NOT call onAddTodo with invalid data', () => {
    var todoText = '';

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onTodoAdded={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.addTodoField.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
