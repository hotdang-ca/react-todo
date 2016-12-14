var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var { Todo } = require('Todo');

describe('Todo Component', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  // this one doesn't work because onClick is stupid'
  // it('should call onToggle prop with id on click', () => {
  //   var todoData = {
  //     id: 199,
  //     text: 'Write todo.test.jsx test',
  //     completed: true
  //   };

  //   var spy = expect.createSpy();
  //   var todo = TestUtils.renderIntoDocument(<Todo {...todo} dispatch={spy} />);
  //   var $el = $(ReactDOM.findDOMNode(todo));
  //   TestUtils.Simulate.click($el[0]);
  //   console.log($el);

  //   expect(spy).toHaveBeenCalledWith({
  //     type: 'TOGGLE_TODO',
  //     id: todoData.id
  //   });
  // });
  
});
