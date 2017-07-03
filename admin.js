var uuid = require("node-uuid");
var _ = require("lodash");
var rooms = require("./data/rooms.json");
var express = require("express");

var router = express.Router();
module.exports = router;

router.use(function(req, res, next) {
    if (req.user.admin) {
        next();
        return;
    }
    res.redirect("/login");
});

router.get("/rooms", function(request, response){
        response.render("rooms", {
            title:"Admin Rooms",
            rooms: rooms
        });
});

router.route('/rooms/add')
    .get(function(request, response){
        response.render("add");
    })
    .post(function(request, response){
        var room = {
            name: request.body.name,
            id: uuid.v4()
        };
        rooms.push(room);
        response.redirect(request.baseUrl + "/rooms");
    });

router.get("/rooms/delete/:id", function(req, res) {
        var roomId = req.params.id;
        rooms = rooms.filter(r => r.id !== roomId);
        res.redirect(req.baseUrl + "/rooms");
});

router.route("/rooms/edit/:id")
    .all(function(req, res, next) {
        var roomId = req.params.id;
        var room = _.find(rooms, (r => r.id === roomId));
        if (!room) {
            res.sendStatus(404);
            return;
        }
        res.locals.room = room;
        next();
    })
    .get(function(req, res) {       
        res.render("edit");
    })
    .post(function(request, response){
        response.locals.room.name = request.body.name;

        response.redirect(request.baseUrl + "/rooms");
    });