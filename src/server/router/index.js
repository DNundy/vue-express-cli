const express = require('express')
const router = require('express').Router()

router.use('/User', (req, res) => {
    res.send('<p>some html</p>');
})


module.exports = router;