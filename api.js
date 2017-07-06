var express = require("express");
var rooms = require("./data/rooms.json");
var messages = require("./data/messages.json");
var _ = require("lodash");
var uuid = require("node-uuid");
var users = require("./data/users.json");
var mainMenu = require("./data/mainMenu")

var router = express.Router();
module.exports = router;

router.get("/currentUser", function(req, res) {
    res.json(req.user.name);
})

router.get("/mainMenu", function(req, res) {
    var role = req.user.role;
    var menuItems = mainMenu.filter((menu) => menu.role == role);
    res.json(menuItems);
})