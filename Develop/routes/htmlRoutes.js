const path = require('path');
const router = require('express').Router();

//Get request for HTML
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//Get request for Notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;