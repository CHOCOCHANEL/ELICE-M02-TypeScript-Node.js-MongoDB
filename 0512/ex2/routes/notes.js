const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router.get('/', (req, res, next)=>{
    const notes = Note.list();
    res.json(notes);
})

module.exports = router;