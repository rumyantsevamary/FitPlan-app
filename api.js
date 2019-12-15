var express = require('express');
var _ = require('lodash');
var uuid = require('node-uuid');
var users = require('./data/users.json');
var exercisesList = require('./data/exercisesList.json');
var plannedActions = require('./data/plannedActions.json');

var router = express.Router();
module.exports = router;

router.get('/currentUser', function(req, res) {
  res.json(req.user.name);
});

router.get('/exercises/list', function(req, res) {
  res.json(exercisesList);
});

router.post('/plannedActions', function(req, res) {
  var date = req.body;
  var userId = req.user.id;
  var plannedEvents = plannedActions.filter(
    item =>
      item.year == date.year &&
      item.month == date.month &&
      item.userId == userId
  );
  if (plannedEvents.length == 0) {
    plannedEvents = {};
  } else {
    plannedEvents = plannedEvents[0];
  }
  res.json(plannedEvents);
});
