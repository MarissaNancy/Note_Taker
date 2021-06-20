const router = require('express').Router();
//router const like using app
const path = require('path');

// const { notes } = require('');//filename?? so we can generate notes

router.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.json"));
});

router.get("/api/notes/:id", (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.status(404).send(" Note not found!");
    }
});

router.post("/api/notes", (req, res) => {
    req.body.id = notes.length.toString();
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
});
