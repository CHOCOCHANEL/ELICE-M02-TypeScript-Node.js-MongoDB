const express = require('express');
const Note = require('../models/note');

const router = express.Router();

router.get('/', (req, res, next)=>{
    const authorList = Note.authorList();
    res.json(authorList);
})

router.get('/:author/notes', (req, res, next)=>{
    const { author } = req.params;
    try{
        const notesByAuthor = Note.findByAuthor(author);
        res.json(notesByAuthor);
    } catch (e) {
        next(e);
    }
})

module.exports = router;