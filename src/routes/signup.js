'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const signUpRouter = express.Router();


const { Users } = require('../models/index');



signUpRouter.post('/signup',async(req,res)=>{
  try {
    const { email, username, password } =req.body
    const passwordhash = await bcrypt.hash(password, 10);
      const record = await Users.create({ username: username, password: passwordhash,  email: email});
      res.status(201).json(record);
    } catch (e) { res.status(500).send('Error Creating User'); }

})

module.exports=signUpRouter;