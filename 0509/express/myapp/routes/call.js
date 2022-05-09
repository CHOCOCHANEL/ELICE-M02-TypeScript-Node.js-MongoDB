const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('test express');
    res.send('hello express');
    next();
})

router.get('/', (req, res, next) => {
    console.log('2nd next');
})

router.get('/member', (req, res)=>{
    res.send('member called');
})

router.get('/member/:id', (req, res) => {
    const memberId = req.params.id;
    res.send(`${memberId}`);
})

module.exports = router;