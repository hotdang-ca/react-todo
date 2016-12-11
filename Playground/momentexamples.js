var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1471428951;
var currentMoment = moment.unix(timestamp);

console.log(currentMoment.format("MMMM Do YYYY @ h:mm A"));

console.log(currentMoment.fromNow());
