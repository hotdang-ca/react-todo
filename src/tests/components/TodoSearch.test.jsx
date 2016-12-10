var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch Component', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
      var spy = expect.createSpy();
      var searchText = 'Dog';

      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
      todoSearch.refs.searchField.value = searchText;
      TestUtils.Simulate.change(todoSearch.refs.searchField);

      expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call onSearch with proper checked value', () => {
      var spy = expect.createSpy();
      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

      todoSearch.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);

      expect(spy).toHaveBeenCalledWith(true, '');
  });
});