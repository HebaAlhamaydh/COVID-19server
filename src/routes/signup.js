'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const signUpRouter = express.Router();


const { Users } = require('../models/index');

// signUpRouter.get('/',(req,res)=>{
//     res.send("welcome to home page");
// })

signUpRouter.post('/signup',async(req,res)=>{
  try {
    const { role,email, username, password } =req.body
    const passwordhash = await bcrypt.hash(password, 10);
      const record = await Users.create({ username: username, password: passwordhash, role: role, email: email});
      res.status(201).json(record);
    } catch (e) { res.status(500).send('Error Creating User'); }

})

module.exports=signUpRouter;