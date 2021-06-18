const router = require('express').Router();
//router const like using app
const path = require('path');

// const { notes } = require('');//filename?? so we can generate notes

router.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
});


//for this note parameter we will need to give note an id?
// router.post("/api/notes", function(req, res) {
