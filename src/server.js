'use strict';
require('dotenv').config();
// const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");

const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const signUp=require("./routes/signup")
const signIn=require("./routes/signin")
const secretstuff=require('./routes/secretStuff')
const v1Routes=require("./routes/v1");
const v2Router=require("./routes/v2");


app.get("/", (req, res) => {
    res.send("Welcome To COVID-19 Homepage");
  });
  

app.use(express.json());
app.use(cors());

// Routes
app.use(signUp);
app.use(signIn);
app.use(secretstuff)
app.use('/v2',v2Router);
app.use('/v1',v1Routes);

//error handler
app.use("*", notFoundHandler);
app.use(errorHandler); 


//run my server in this port
function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listen and Running on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};