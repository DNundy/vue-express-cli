const express = require('express')
const router = require('express').Router()

const User = require('./user');

router.use('/user',User);

router.use('/*',(req,res) => {
    console.error('【ERROR】Interface Not Found !');
    res.status(404).json('Interface Not Found !');
});


module.exports = router;