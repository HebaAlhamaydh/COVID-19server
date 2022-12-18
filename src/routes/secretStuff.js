'use strict';
const express = require('express');
const secretStuffRouters=express.Router();
const bearer=require('../middlewares/bearerAuth');

secretStuffRouters.get('/secretstuff',bearer,(req,res)=>{
    res.status(200).json({
        'message': 'Welcome To Secret Area!',
        'user': req.user
    });})



module.exports=secretStuffRouters;