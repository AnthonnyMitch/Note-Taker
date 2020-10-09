var db = require("../db/db.json");
var store = require("../db/store");


module.exports = function (app) {




    var app = require("express").app();
    var store = require("../db/store");

    module.exports = function (app) {

        app.get("/store", function (req, res) {
            store.getstore()
                .then(store => res.json(store))
                .catch(err => res.status(500).json(err));
        })

        app.post("/store", function (req, res) {
            store.addstore(req.body)
                .then(store => res.json(store))
                .catch(err => res.status(500).json(err));
        })

        app.delete("/store/:id", function (req, res) {
            store.removeNote(req.params.id)
                .then(() => res.json({ ok: true }))
                .catch(err => res.status(500).json(err));
        })

    };
    