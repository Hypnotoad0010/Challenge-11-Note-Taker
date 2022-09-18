//Loads modules
const router = require("express").Router();
const fs = require("fs");

//Api GET request
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });

//Api POST request
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    console.log(notes);
  
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
  );

  module.exports = router;