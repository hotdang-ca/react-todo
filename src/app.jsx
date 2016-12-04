var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

// app styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate is UP</p>,
  document.getElementById('app')
);
